import React from "react";
import {
  Nav,
  Main,
  AboutUs,
  Pricing,
  Faqs,
  Footer,
} from "../components/landing";

function Landing() {
  return (
    <div>
      <Nav />
      <Main />
      <AboutUs />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Landing;
