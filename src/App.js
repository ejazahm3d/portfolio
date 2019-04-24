import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import "./App.css";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
