import { useEffect, useState } from "react";
import { request } from "../utils/requester";

const baseUrl = "/data/cars";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    try {
      request.get(baseUrl).then(setCars);
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, []);
  return { cars, pending };
};

export const carsService = {
  async getAllCars() {
    const res = await fetch("http://localhost:3030/jsonstore/cars/cars");
    const data = await res.json();
    const carsData = Object.values(data);
    return carsData;
  },
  async createCar(carData) {
    //TODO: add X-Authorization token
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    };
    const res = await fetch(
      "http://localhost:3030/jsonstore/cars/cars",
      options
    );
    const data = await res.json();
    return data;
  },
};
