import Homepage from './pages/Homepage/Homepage'
import Profile from './pages/Profile/Profile'
import Projects from './pages/Projects/Projects'
import SingleProject from './pages/Projects/SingleProject/SingleProject'
import Navbar from './components/Nav/Navbar'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact'
import { BrowserRouter, Route } from "react-router-dom";

import './assets/styles/styles.scss'

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
