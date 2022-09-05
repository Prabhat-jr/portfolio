import React from "react";
import Navbar from "./project/Navbar";
import Intro from "./project/intro/Intro";
import Services from "./project/Services/Services";
import "./App.css";
import Experience from "./project/Experience/Experience";
import Work from "./project/work/Work";
import Portfolio from "./project/Portfolio/Portfolio";
import Testimonials from "./project/Testimonials/Testimonials";
import Contact from "./project/Contact/Contact";
import Footer from "./project/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="bodyApp"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
