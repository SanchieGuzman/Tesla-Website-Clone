import styles from "./cars.module.css";

function Cars({
  bgImage,
  model,
  subText,
  lowerText,
  // demoButtonUrl,
  // orderButtonUrl,
  orderButtonBackgroundColor = "#3e6ae1",
  demoButtonBackgroundColor = "white",

  orderButtonColor = "whites",
  demoButtonColor = "black",

  subtextStyle = "2px solid white",
  lowerTextStyle = "none",
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.textContainer}>
        <h1>{model}</h1>
        <h2 style={{ borderBottom: subtextStyle }}>{subText}</h2>
        <h3 style={{ textDecoration: lowerTextStyle }}>{lowerText}</h3>
      </div>
      <div className={styles.buttons}>
        <button
          style={{
            backgroundColor: orderButtonBackgroundColor,
            color: orderButtonColor,
          }}
        >
          Order Now
        </button>
        <button
          style={{
            backgroundColor: demoButtonBackgroundColor,
            color: demoButtonColor,
          }}
        >
          Demo Drive
        </button>
      </div>
    </div>
  );
}

export default Cars;
