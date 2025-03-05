import styles from "./LogoBar.module.css";

export default function LogoBar() {
  return (
    <div
      className={"text-center mx-auto mb-5 wow fadeInUp " + styles.container}
      data-wow-delay="0.1s"
    >
      <h1>Cozy Corners BnB</h1>
      <div className={styles.moto}>
        The UK's leading destination for unique stays and unforgettable
        experiences. We offer a wide selection of properties to cater to all
        your requirements.
      </div>
    </div>
  );
}
