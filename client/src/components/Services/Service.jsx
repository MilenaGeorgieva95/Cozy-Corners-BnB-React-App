import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Service.module.css";
import carsService from "../../api/carsService";

export default function Service() {
  const [carsData, setCarsData] = useState([]);
  useEffect(() => {
    carsService
      .getAllCars()
      .then((data) => {
        console.log(data);
        return setCarsData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className="display-5 text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px", padding: "30px" }}
      >
        <div></div>
        <h3 className="display-5 text-dark mb-2 ">Veluxe Motors</h3>
        <p className={"display-5 text-dark " + styles.subHeading}>
          Unlock the road to your next adventure
        </p>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <h2>Our Most Popular Cars</h2>
            {carsData.map((car) => (
              <Card key={car._id} car={car} />
            ))}
            <h2>Our Most Popular Luxury Cars</h2>

            <h2>Our Vans</h2>
          </div>
        </div>
      </div>
    </>
  );
}
