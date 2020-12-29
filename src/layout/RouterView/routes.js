import React from 'react'

const Count = React.lazy(() => import('../../example/Count'))
const TodoList = React.lazy(() => import('../../example/TodoList'))

const routes = [
  { path: '/count', exact: true, name: 'Count', component: Count },
  { path: '/todoList', exact: true, name: 'TodoList', component: TodoList }
]

export default routes
