import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Service.module.css";
import carsService from "../../api/carsService";
import PillBtn from "../Buttons/PillBtn";
import CreateCarForm from "../Cars/CreateCarForm";

export default function Service() {
  const [carsData, setCarsData] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    carsService
      .getAllCars()
      .then((data) => {
        console.log(data);
        return setCarsData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showCreateHandler = () => {
    setShowCreate(true);
  };

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createCarHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const newCar = await carsService.createCar(formData);
    setCarsData((oldData) => [...oldData, newCar]);
    setShowCreate(false);
  };

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
        {showCreate ? (
          <CreateCarForm
            onClose={closeCreateHandler}
            onCreate={createCarHandler}
          />
        ) : (
          <span
            className="btn btn-primary rounded-pill py-3 px-5 mt-3"
            onClick={showCreateHandler}
          >
            Create Car
          </span>
        )}
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
