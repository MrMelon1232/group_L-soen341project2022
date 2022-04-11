import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ECommerceProvider } from './Context/ECommerceContext'

// eslint-disable-next-line
ReactDOM.render(
  <React.StrictMode>
    <ECommerceProvider>
      <App />
    </ECommerceProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
//ReactDOM.render(<App />, document.getElementById('root'))
