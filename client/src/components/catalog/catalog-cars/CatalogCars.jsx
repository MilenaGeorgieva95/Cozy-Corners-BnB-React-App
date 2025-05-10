import { useCars } from "../../../api/carsApi";
import Card from "../cards/Card";

export default function CatalogCars() {
  const { cars, pending } = useCars();
  console.log(cars);

  return (
    <>
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "70%", padding: "10px" }}
      >
        <h3 className="display-6 mb-2 ">Our Fleet of Rental Cars</h3>
        <span className="text-muted medium mb-2">
          Find the Perfect Car for Your Journey
        </span>
      </div>
      {cars.map((car) => (
        <Card key={car._id} car={car} />
      ))}
    </>
  );
}
