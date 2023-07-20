import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/footer/footer";
import ourPackages from './components/our-packages/our-packages';

import Back_destination from './components/Back_destination/Back_destination';
import Our_Best_Destinations from './components/Our_Best_Destinations/Our_Best_Destinations';

function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <Back_destination/>
   <ourPackages/>
   <Services/>
   <Our_Best_Destinations/>
   <Footer />
   
    </>
  );
}

export default App;
