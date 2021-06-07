import { createBrowserHistory } from 'history'
import * as ReactRedux from '@reduxjs/toolkit'
import * as ConnectedRouter from 'connected-react-router'

export const history = createBrowserHistory()

const reducer = ReactRedux.combineReducers({
  router: ConnectedRouter.connectRouter(history)
})

export const store = ReactRedux.configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ConnectedRouter.routerMiddleware(history))
})
