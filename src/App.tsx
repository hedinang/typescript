import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThreeD from './components/pages/ThreeD';
import Ar from './components/pages/Ar';
import { Animation } from './components/pages/Animation';
export default function App() {
  return (
    <Router >
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={ThreeD} />
          <Route path='/ar' component={Ar} />
          <Route path='/animation' component={Animation} />
        </Switch>
      </Suspense>
    </Router>
  )
}