import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Intro from './pages/Intro'
import Contact from './pages/Contact'
import About from './pages/About'
import Family from './pages/Family'
import Product from './pages/Product'
import NoPage from './pages/NoPage'
import NavBar from "./comps/NavBar";
import Footer from "./comps/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Intro/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/family" element={<Family/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
