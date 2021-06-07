import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import { App } from './App'

export const Router = () => {
  return (
    <ReactRouter.Switch>
      <ReactRouter.Route exact path="/" component={App} />
    </ReactRouter.Switch>
  )
}
