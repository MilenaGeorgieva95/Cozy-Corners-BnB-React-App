import "./App.css";
import { Routes, Route } from "react-router";
import BackToTopBtn from "./components/Buttons/BackToTopBtn";
import Footer from "./components/Footer";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";
import MyProfile from "./components/my-profile/MyProfile";
import CatalogCars from "./components/catalog/catalog-cars/CatalogCars";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/catalog-cars" element={<CatalogCars />} />
        <Route path="/catalog-vans" element={<MyProfile />} />
        <Route path="/car-club" element={<MyProfile />} />
        <Route path="/about" element={<MyProfile />} />
      </Routes>
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default App;

// <Feature />

// <Appointment />

// <Testimonials />
