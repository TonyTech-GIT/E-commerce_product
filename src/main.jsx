import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QuantityProvider } from './components/QuantityContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuantityProvider>
      <App />
    </QuantityProvider>

  </React.StrictMode>,
)
