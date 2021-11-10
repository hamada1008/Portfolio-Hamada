import "./App.css";
import React, { useEffect, useState } from "react";
import whenDomReady from "when-dom-ready";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import ProjectSection from "./Components/Projects/ProjectSection";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import RedirectComponent from "./Components/Redirect/RedirectComponent";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    whenDomReady(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 4000);
    });
  }, []);
  if (window.location.pathname !== "/") {
    return <RedirectComponent />;
  } else {
    return (
      <>
        {!loaded && <Loader />}
        {!!loaded && (
          <>
            <Navbar />
            <About />
            <Skills />
            <ProjectSection />
            <Contact />
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default App;
