import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./FeaturedCars.module.css";
import carsService from "../../../api/carsService";

export default function FeaturedCars() {
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
        className="display-5 text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "70%", padding: "30px" }}
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
            <h2>Featured Cars</h2>
            {carsData.map((car) => (
              <Card key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
