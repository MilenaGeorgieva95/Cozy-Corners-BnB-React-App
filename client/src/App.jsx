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
import LogoBar from "./components/Deals/LogoBar";
import CreateCarForm from "./components/Cars/CreateCarForm";

function App() {
  return (
    <>
      <Nav />

      <Header />

      <Service />

      <LogoBar />

      <TopDealsBar />

      <CreateCarForm />

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
