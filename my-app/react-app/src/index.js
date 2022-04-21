import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { ECommerceProvider } from './Context/ECommerceContext'
import { store } from './store/configureStore'

// eslint-disable-next-line
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
//ReactDOM.render(<App />, document.getElementById('root'))
