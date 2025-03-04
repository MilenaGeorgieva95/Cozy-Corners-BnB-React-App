import "./App.css";
import About from "./components/About";
import Appointment from "./components/Appointment";
import BackToTopBtn from "./components/Buttons/BackToTopBtn";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Service from "./components/Services/Service";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import TopDealsBar from "./components/Deals/TopDealsBar";

function App() {
  return (
    <>
      <Nav />

      <Header />

      <TopDealsBar />

      <Service />

      <About />

      <Feature />

      <Appointment />

      <Testimonials />

      <Footer />

      <BackToTopBtn />
    </>
  );
}

export default App;
