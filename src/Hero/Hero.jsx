import {
  teslaName,
  globeIcon,
  profileIcon,
  helpIcon,
} from "../assets/navIcons";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <img src={teslaName} alt="Tesla Name" className={styles.logo} />
          <div className={styles.navButtons}>
            <ul>
              <li>
                <a href="#">Vehicles</a>
              </li>
              <li>
                <a href="#">Energy</a>
              </li>
              <li>
                <a href="#">Charging</a>
              </li>
              <li>
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">We, Robot</a>
              </li>
            </ul>
          </div>
          <div className={styles.navIcons}>
            <ul>
              <li>
                <a href="#">
                  <img src={helpIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={globeIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={profileIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.centerContainer}>
          <h1>0% APR Available</h1>
          <div className={styles.headerButtons}>
            <button>Order Model Y</button>
            <button>Order Model 3</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
