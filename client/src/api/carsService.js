const baseUrl = "http://localhost:3030/jsonstore/cars";

export default {
  async getAllCars() {
    const res = await fetch(baseUrl + "/cars");
    const data = await res.json();

    const carsData = Object.values(data);
    return carsData;
  },
};
