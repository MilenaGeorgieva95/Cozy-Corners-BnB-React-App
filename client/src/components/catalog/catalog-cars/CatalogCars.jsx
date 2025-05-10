import { useCars } from "../../../api/carsApi";
import Card from "../cards/Card";

export default function CatalogCars() {
  const { cars, pending } = useCars();
  console.log(cars);

  return (
    <>
      <h2>Cars Catalog</h2>
      {cars.map((car) => (
        <Card key={car._id} car={car} />
      ))}
    </>
  );
}
