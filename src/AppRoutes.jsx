import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from './pages/home'
import BlogPage from './pages/blog/index'
import ShowPost from './pages/blog/show-post'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/blog' component={BlogPage} />
      <Route exact path='/blog/:id' component={ShowPost} />
    </Switch>
  )
}

export default AppRoutes
