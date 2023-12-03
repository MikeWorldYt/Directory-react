import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Head from './components/head.jsx'
import Explorer from './components/explorer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 >File Management by MikeWorldYt</h1>
    <Head />
    <Explorer />
  </React.StrictMode>,
)
