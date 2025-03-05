import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div
        className={
          "container-fluid header bg-primary p-0 mb-5 " + styles.container
        }
      >
        <div
          className={
            "row g-0 align-items-center  flex-lg-row " + styles.sectionWrapper
          }
        >
          <div
            className={"col-lg-7 p-5 wow fadeIn " + styles.section}
            data-wow-delay="0.4s"
          >
            <h2 className="display-5 text-dark mb-4">
              <a className="display-6 text-dark" href="#">
                Reserve Your Stay
              </a>{" "}
              {}
              <span className={styles.orSpan}>or</span> {}
              <a href="#">
                <span className={styles.textGreen}>
                  View/Modify/Cancel Reservation
                </span>
              </a>
            </h2>

            <form className="display-5 text-dark mb-5">
              <div className="row g-4 ">
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: "55px", fontSize: "18px" }}
                  >
                    <option defaultChecked>
                      Choose From Our Top Locations
                    </option>
                    <option value="bulgaria">Bulgaria</option>
                    <option value="spain">Spain</option>
                    <option value="greece">Greece</option>
                  </select>
                </div>

                <div className="col-12 col-sm-2">
                  <button
                    className={"btn btn-primary w-100 py-3 " + styles.searchBtn}
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-dark mb-0">Available Locations</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-dark mb-0">Available Properties</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    123456
                  </h2>
                  <p className="text-dark mb-0">TravelClub Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
