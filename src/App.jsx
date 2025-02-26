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
      {/* <!-- Topbar Start --> */}
      <Topbar />
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <Nav />
      {/* <!-- Navbar End --> */}

      {/* <!-- Header Start --> */}
      <Header />
      {/* <!-- Header End --> */}

      {/* <!-- About Start --> */}
      <About />
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <Service />
      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}
      <Feature />
      {/* <!-- Feature End --> */}

      {/* <!-- Team Start --> */}
      <Team />
      {/* <!-- Team End --> */}

      {/* <!-- Appointment Start --> */}
      <Appointment />
      {/* <!-- Appointment End --> */}

      {/* <!-- Testimonial Start --> */}
      <Testimonials />
      {/* <!-- Testimonial End --> */}

      {/* <!-- Footer Start --> */}

      {/* <!-- Footer End --> */}
      <Footer />
      {/* <!-- Back to Top --> */}
      <BackToTopBtn />
    </>
  );
}

export default App;
