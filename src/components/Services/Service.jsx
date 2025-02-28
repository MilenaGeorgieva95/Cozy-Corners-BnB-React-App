import Card from "./Card";
import styles from "./Service.module.css";

export default function Service() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <Card title={"Deals & Promotions"} />
            <Card title={"CarClub Membership"} />
            <Card title={"Luxury Special Moments"} />
            <Card title={"Road Trip Ready"} />
            <Card title={"We have the Van for You"} />
            <Card title={"Electric Vehicle Hire"} />
          </div>
          <div
            className="display-5 text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px", padding: "30px" }}
          >
            <div></div>
            <h1 className="display-5 text-dark mb-2 ">Veluxe Motors</h1>
            <p className={"display-5 text-dark " + styles.subHeading}>
              Unlock the road to your next adventure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
