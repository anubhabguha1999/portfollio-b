import React, { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Qualifications } from "./components/Qualifications/Qualifications";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const appRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (appRef.current) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const middleOfPage =
    (document.documentElement.scrollHeight - window.innerHeight) / 2.55;
  const bottomOfPage =
    document.documentElement.scrollHeight - window.innerHeight;

  
  const transitionPoint = bottomOfPage - (window.innerHeight - 3); 

  
  let backgroundColor = "";
  if (scrollY > middleOfPage) {
    const progress = Math.min(
      1,
      (scrollY - middleOfPage) / (transitionPoint - middleOfPage)
    );
    
    const redComponent = Math.round(0 * progress); 
    const greenComponent = Math.round(0 * progress); 
    const blueComponent = Math.round(0 * progress); 
    backgroundColor = `rgb(${redComponent}, ${greenComponent}, ${blueComponent})`;
  }

  return (
    <Router>
      <div
        className={`${styles.App} ${styles.rainingStars}`} // Add rainingStars class
        ref={appRef}
        style={{
          backgroundColor: backgroundColor,
          transition: "background-color 1s ease-out", 
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/qualifications" element={<Qualifications />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
