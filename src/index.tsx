import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReduxStore from './store'

import { Router } from './pages/routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore.store}>
      <ConnectedRouter history={ReduxStore.history}>
        <ChakraProvider resetCSS={true}>
          <Router />
        </ChakraProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
