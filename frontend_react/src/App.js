import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Publications,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Publications />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
