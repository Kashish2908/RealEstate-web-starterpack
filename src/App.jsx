import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services"
import Footer from "./components/footer/footer"

import Back_destination from './components/Back_destination/Back_destination';

function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <Back_destination/>
   <Services/>
   <Footer />
   
    </>
  );
}

export default App;
