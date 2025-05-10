import styles from "./Card.module.css";

export default function Card({ car }) {
  console.log(car);

  return (
    <>
      <div className="row-lg-4 row-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item bg-light rounded h-100 p-5">
          <div className="relative overflow-hidden h-64 w-full mb-4">
            <img className="w-full h-full object-cover" src={car.img} alt="" />
          </div>
          <h4 className="mb-3">{car.brand}</h4>
          <p className="mb-3">{car.model}</p>
          <span className={styles.detailsBtn}>Details</span>
        </div>
      </div>
    </>
  );
}
