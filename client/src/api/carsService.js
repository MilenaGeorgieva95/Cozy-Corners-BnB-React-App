const baseUrl = "http://localhost:3030/jsonstore/cars/cars";

export default {
  async getAllCars() {
    const res = await fetch(baseUrl);
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
    const res = await fetch(baseUrl, options);
    const data = await res.json();
    return data;
  },
};
