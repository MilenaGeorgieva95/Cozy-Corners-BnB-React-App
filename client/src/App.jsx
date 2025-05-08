import "./App.css";
import { Routes, Route } from "react-router";
import BackToTopBtn from "./components/Buttons/BackToTopBtn";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 

      <Feature />

      <Appointment />

      <Testimonials /> */}
      </Routes>

      <Footer />

      <BackToTopBtn />
    </>
  );
}

export default App;
