import React from "react";
import "./App.scss";

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
