import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions';
import App from './containers/App';

const mapStateToProps = (state) => {
  //this state is  current state?
  return {
    allSeasons: state.allSeasons,
    routing: state.routing
  }
}

const mapDispachToProps = (dispatch) => {
  // what bindActionCreatorsDo
  return bindActionCreators(actionCreators, dispatch);
}

const Root = connect(mapStateToProps, mapDispachToProps)(App);

export default Root;
