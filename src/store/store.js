import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import promise from 'redux-promise'
import logger from 'redux-logger'
import promiseMiddleware from '../middleware'
import { combineReducers } from 'redux'
import state from '../state'

function allSeasons(state={}, action){
    switch(action.type) {
      case 'SEASONS_LOADING_STARTED':
          console.log('seasons_loading_started');
          break;
      case 'SEASONS_LOADING_FINISHED':
          return {...state, list: [...action.seasons]};
          //як seasons з'являються в action що саме по собі є action
      case 'SEASONS_LOADING_FAILED':
          console.error(action.error)
          break;
      default:
          break;
    }
    return state;
}

// return state: next || current
let reducers = combineReducers({
    routing: routerReducer,
    allSeasons,
})

let storeWithMiddleWare = applyMiddleware(promiseMiddleware, promise, logger)(createStore)
const store = storeWithMiddleWare(reducers, state)
export const history = syncHistoryWithStore(browserHistory, store)

export default store;
