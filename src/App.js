
import React from 'react';
import NavBar from './components/NavBar';
import "./App.css"
import HeroSection from './components/HeroSection';
import Exprince from './components/Exprince';
import Services from './components/Services';
import ChooseUs from './components/ChooseUs';
import OurClint from './components/OurClint';
import Testimonial from './components/Testimonial';
import Technology from './components/Technology';
import Industry from './components/Industry';
import Footer from './components/Footer';
import Process from './components/Process';

const App = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <Exprince/>
        <Services/>
        <ChooseUs/>
        <OurClint/>
        <Testimonial/>
        <Technology/>
        <Industry/>
        <Process/>
        <Footer/>
    </div>
  );
};

export default App;