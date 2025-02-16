import React from "react";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="portfolio">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;