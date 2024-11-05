import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <p>
        0% APR available for Model 3 and Model Y. <a href="">Learn More</a>
      </p>
    </header>
  );
}

export default Header;
