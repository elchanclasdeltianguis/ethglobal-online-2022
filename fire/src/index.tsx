import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './style.css'
import Main from './pages/main'

export default function App() {
  return (
    <Router>
      <div>
        <Route exact component={Main} path="/" />
      </div>
    </Router>
  )
}

const root = createRoot(document.getElementById('app'))

root.render(<App />)
