import Home from './pages/main/index/home'
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/footer/footer'
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './pages/contact/index'
import Portfolio from './pages/portfolio/index'
import Error from './components/error/error';
import Aftercare from './pages/aftercare';

function RoutesMain() {
  return (
    <div className="App">
      <Router>
        
        <AnimatePresence>
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/aftercare' element={<Aftercare/>} />
              <Route path='/*' element={<Error/>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
       
        
      </Router>
    </div>
  );
}

export default RoutesMain;
