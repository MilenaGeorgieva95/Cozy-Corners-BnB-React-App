import PillBtn from "../Buttons/PillBtn";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item bg-light rounded h-100 p-5">
          <div className={styles.imgContainer}></div>
          <h4 className="mb-3">title</h4>
          <PillBtn text="Details" />
        </div>
      </div>
    </>
  );
}
