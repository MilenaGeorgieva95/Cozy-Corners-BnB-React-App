import "./App.css";
import About from "./components/About";
import Appointment from "./components/Appointment";
import BackToTopBtn from "./components/Buttons/BackToTopBtn";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Service";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />

      <Nav />

      <Header />

      <About />

      <Service />

      <Feature />

      <Team />

      <Appointment />

      <Testimonials />

      <Footer />

      <BackToTopBtn />
    </>
  );
}

export default App;
