const baseUrl = "http://localhost:3030/jsonstore/cars/cars";

export default {
  async getAll() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const carsData = Object.values(data);
    return carsData;
  },
  async create(propertyData) {
    //TODO: add X-Authorization token
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(propertyData),
    };
    const res = await fetch(baseUrl, options);
    const data = await res.json();
    return data;
  },
};
