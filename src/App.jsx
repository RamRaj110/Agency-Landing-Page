import './App.css';
import About from './Component/About';
import Header from './Component/Header';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import Project from './Component/Project';
import Pages from './Component/Pages';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <ToastContainer/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Project/>
      <Pages/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
