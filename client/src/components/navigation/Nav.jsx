import { Link } from "react-router";

export default function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-dark sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">VM</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/my-profile" className="nav-item nav-link">
              My Profile
            </Link>
            <Link to="/catalog-cars" className="nav-item nav-link">
              Hire a Car
            </Link>
            <Link to="/catalog-vans" className="nav-item nav-link">
              Hire a Van
            </Link>
            <Link to="/car-club" className="nav-item nav-link">
              Car Club
            </Link>
            {/* <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Learn
              </Link>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link href="feature.html" className="dropdown-item">
                  The Company
                </Link>
                <Link href="team.html" className="dropdown-item">
                  Events
                </Link>
                <Link href="appointment.html" className="dropdown-item">
                  Appointment
                </Link>
                <Link href="testimonial.html" className="dropdown-item">
                  Testimonial
                </Link>
                <Link href="404.html" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div> */}
            <Link to="about" className="nav-item nav-link">
              About Us
            </Link>
          </div>
          <Link
            to="/appointment"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment<i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}
