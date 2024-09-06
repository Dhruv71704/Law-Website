import React from "react";
import Navbar from "./Components/navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Consultation from "./Components/Consultation/Consultation";
import Testimonials from "./Components/Testimonials/Testimonials";
import Carousel from "./Components/Carousel/Carousel";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import ScrollToTopButton from "./Components/ScrollToTopBTN/ScrollToTopBtn";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Title
        subTitle="Welcome To Our Law Offices"
        title="We Provide Reliable And Effective Legal Services"
      />
      <Card />

      <About />
      <div className="container">
        <Title subTitle="TESTIMONIALS" title="What Our Clients Say" />
        <Testimonials />
      </div>
      <Consultation />
      <Footer />
      <ScrollToTopButton />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default App;
