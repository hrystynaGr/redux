const middleware = store => next => action => {
  if(action.type !== 'PROMISE') return next(action)
  const [started, loaded, failed] = action.actions
  store.dispatch({
    type: started
  })

    if (action.filter === 'seasons') {
    action.promise
      .then(res => {
        store.dispatch({
          type: loaded,
          seasons: res.seasons
        })
      })
      .catch(error => store.dispatch({
        type: failed,
        error
      }))
  }

}
//what does middleware do
export default middleware;
