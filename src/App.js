import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import RouterView from './layout/RouterView'

import './assets/scss/style.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/count'>Count</Link>
      <Link to='/todoList'>TodoList</Link>
      <RouterView />
    </BrowserRouter>
  )
}

export default App
