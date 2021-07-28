import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import About from './Components/About'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()

  return (
    <>
      <div className='App'>
        <div className='container app__container'>
          <div className='row app__row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <SideBar></SideBar>
            </div>
            <div className='col-lg-9 col-md-6 col-sm-12 main-component'>
              <Navbar></Navbar>
              <AnimatePresence>
                <Switch location={location} key={location.key}>
                  <Route exact path='/'>
                    <About></About>
                  </Route>
                  <Route exact path='/resume'>
                    <Resume></Resume>
                  </Route>
                  <Route exact path='/projects'>
                    <Projects></Projects>
                  </Route>
                  <Route>
                    <Redirect to='/'></Redirect>
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
