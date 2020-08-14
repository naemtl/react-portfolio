import React from 'react'
import Homepage from './Homepage'
import Profile from './Profile'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import { BrowserRouter, Route } from "react-router-dom";

import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Route path='/profile' exact component={Profile} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
