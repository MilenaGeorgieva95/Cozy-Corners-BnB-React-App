export default function Card({ title, text, btnTxt }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item bg-light rounded h-100 p-5">
          <div
            className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
            style={{ width: "65px", height: "65px" }}
          >
            <i className="fa fa-heartbeat text-primary fs-4"></i>
          </div>
          <h4 className="mb-3">{title}</h4>
          <p className="mb-4">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet.
          </p>
          <a className="btn" href="">
            <i className="fa fa-plus text-primary me-3"></i>Read More
          </a>
        </div>
      </div>
    </>
  );
}
