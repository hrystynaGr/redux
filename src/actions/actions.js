import Base from '../base';




export const loadSeasons = (params, route) => ({
  type: 'PROMISE',
  filter: 'seasons',
  actions: ['SEASONS_LOADING_STARTED', 'SEASONS_LOADING_FINISHED', 'SEASONS_LOADING_FAILED'],
  promise: Base.load(params, route)
})
