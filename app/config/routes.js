import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from "../components/Home"
import TrainingForm from "../components/TrainingForm"
import UserDetails from "../components/UserDetails"


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    	<IndexRoute component={Home} />
      <Route path ='TrainingForm' component={TrainingForm} />
      <Route path='UserDetails' component={UserDetails} />
    </Route>
  </Router>
)

export default routes