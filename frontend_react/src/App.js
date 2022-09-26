import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Education,
  Publications,
  Testimonial,
  Projects,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Publications />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
