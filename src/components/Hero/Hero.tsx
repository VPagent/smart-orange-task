import { FC, SyntheticEvent, useState } from "react";
import styles from "./Hero.module.scss";
import Container from "../Container/Container";
import hero from "../../static/images/hero.png";
import { ReactComponent as ArrowRight } from "../../static/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../static/icons/arrow-left.svg";
import ButtonLink from "../ButtonLink/ButtonLink";

const Hero: FC = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  const allOfNumbers = 2;

  const handleChangeNumber = (e: SyntheticEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.id) {
      case "decrement":
        return setCurrentNumber(currentNumber - 1);
      case "increment":
        return setCurrentNumber(currentNumber + 1);
      default:
        return console.log("error in switch");
    }
  };

  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.leftBlock}>
            <div className={styles.textBox}>
              <h1 className={styles.heroTitle}>project</h1>
              <p className={styles.heroTitleSpan}>home</p>
            </div>
            <div className={styles.controls}>
              <button
                className={styles.button}
                disabled={currentNumber === 1}
                onClick={handleChangeNumber}
                id="decrement"
              >
                <ArrowLeft className={styles.icon} />
              </button>
              <button
                className={styles.button}
                disabled={currentNumber === 2}
                onClick={handleChangeNumber}
                id="increment"
              >
                <ArrowRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.countBox}>
              <p className={styles.currNumber}>{currentNumber}</p>
              <p>/</p>
              <p className={styles.allNumbers}>{allOfNumbers}</p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <img className={styles.image} src={hero} alt="heroImage" />
            <ButtonLink
              className={styles.imageLink}
              label="взглянуть"
              onClick={() => {}}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
