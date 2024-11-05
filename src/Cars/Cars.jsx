import styles from "./cars.module.css";

function Cars(props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className={styles.textContainer}>
        <h1>{props.model}</h1>
        <h2>{props.subText}</h2>
        <hr />
        <h3>{props.lowerText}</h3>
      </div>
      <div className={styles.buttons}>
        <button>Order Now</button>
        <button>Demo Drive</button>
      </div>
    </div>
  );
}

export default Cars;
