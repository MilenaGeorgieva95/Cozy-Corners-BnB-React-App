import { useCars } from "../../../api/carsApi";

export default function CatalogCars() {
  const { cars, pending } = useCars();
  console.log(cars);

  return (
    <>
      <h2>Cars Catalog</h2>
    </>
  );
}
