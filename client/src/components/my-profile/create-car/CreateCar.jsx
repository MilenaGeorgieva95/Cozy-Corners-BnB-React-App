import { useState } from "react";
import CreateCarForm from "./CreateCarForm";
import carsService from "../../../api/carsService";
import { useNavigate } from "react-router";

export default function CreateCar() {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();
  const showCreateHandler = () => {
    setShowCreate(true);
  };

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createCarHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const newCar = await carsService.createCar(formData);
      setShowCreate(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2>My Profile</h2>
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
  );
}
