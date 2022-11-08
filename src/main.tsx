import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/sass/base.scss'
import './utils/set-font'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
