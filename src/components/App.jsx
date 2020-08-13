import React from 'react'
import Homepage from './Homepage'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter, Route } from "react-router-dom";

import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
