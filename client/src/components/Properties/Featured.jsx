import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Featured.module.css";
import propertiesService from "../../api/propertiesService";
import CreatePropertyForm from "./CreatePropertyForm";

export default function Service() {
  const [propertyData, setPropertyData] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    propertiesService
      .getAll()
      .then((data) => {
        console.log(data);
        return setPropertyData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showCreateHandler = () => {
    setShowCreate(true);
  };

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createPropertyHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const newProperty = await propertiesService.create(formData);
    setPropertyData((oldData) => [...oldData, newProperty]);
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
        <h3 className="display-5 text-dark mb-2 ">Cozy Corners BnB</h3>
        <p className={"display-5 text-dark " + styles.subHeading}>
          Find Your Perfect Stay, Where Comfort Meets Adventure
        </p>
        {showCreate ? (
          <CreatePropertyForm
            onClose={closeCreateHandler}
            onCreate={createPropertyHandler}
          />
        ) : (
          <span
            className="btn btn-primary rounded-pill py-3 px-5 mt-3"
            onClick={showCreateHandler}
          >
            Create Property
          </span>
        )}
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <h2>Featured Properties</h2>
            {propertyData.map((car) => (
              <Card key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
