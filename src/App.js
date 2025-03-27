import React from 'react';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => (
  <>
    <Navbar />
    <main>
    <Carousel />
    <AboutUs />
    <Donation /> 
    <Contact /> 
    <ScrollButton />
    </main>
    {<Footer />}
  </>
);

export default App;
