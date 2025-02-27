import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div
        className={
          "container-fluid header bg-primary p-0 mb-5 " + styles.container
        }
      >
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-7 p-5 wow fadeIn" data-wow-delay="0.4s">
            <h1 className="display-4 text-white mb-5">
              Unlock the road to your next adventure with our rentals
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-light mb-0">Expert Doctors</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-light mb-0">Medical Stuff</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12345
                  </h2>
                  <p className="text-light mb-0">Total Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Cardiology</h1>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Neurology</h1>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
