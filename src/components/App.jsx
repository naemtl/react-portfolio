import React from 'react'
import Homepage from './Homepage'
import Profile from './Profile'
import Projects from './Projects'
import SingleProject from './SingleProject'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import Contact from './Contact/Contact'
import { BrowserRouter, Route } from "react-router-dom";

import '../styles/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/projects/:tag' exact component={SingleProject} />
      <Route path='/contact' exact component={Contact} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
