import React from "react";
import NavBar from "./sections/nav-bar/NavBar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";

import Portfolio from "./sections/Portfolio/Portfolio";

import Contact from "./sections/contacts/Contacts";

import Footer from "./sections/footer/Footer";

import FloatingNav from "./sections/floating-navs/FloatingNav";

const App = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
