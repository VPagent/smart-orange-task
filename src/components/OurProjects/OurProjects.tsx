import { FC } from "react";
import styles from "./OurProjects.module.scss";
import Container from "../Container/Container";
import topLeftImg from "../../static/images/ourTopLeft.png";
import topRightImg from "../../static/images/ourTopRight.png";
import bottomLeftImg from "../../static/images/ourBottomLeft.png";
import bottomCenterImg from "../../static/images/ourBottomCenter.png";
import bottomRightImg from "../../static/images/ourBottomRight.png";
import ButtonLink from "../ButtonLink/ButtonLink";

const OurProjects: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Наши проекты</h2>
          <div className={styles.projectsBox}>
            <div className={styles.topBox}>
              <div className={styles.thumb}>
                <img src={topLeftImg} alt="Досуговый центр" />
                <div className={styles.topHiddenBox}>
                  <h3 className={styles.hiddenBoxTitle}>Досуговый центр</h3>
                  <ButtonLink
                    className={styles.thumbButton}
                    label="подробнее"
                    onClick={() => {}}
                    variant="transparent"
                  />
                </div>
              </div>
              <div className={styles.thumb}>
                <img src={topRightImg} alt="Круглое здание" />
                <div className={styles.topHiddenBox}>
                  <h3 className={styles.hiddenBoxTitle}>Круглое здание</h3>
                  <ButtonLink
                    className={styles.thumbButton}
                    label="подробнее"
                    onClick={() => {}}
                    variant="transparent"
                  />
                </div>
              </div>
            </div>
            <div className={styles.bottomBox}>
              <div className={styles.bottomBoxThumb}>
                <img src={bottomLeftImg} alt="Паркинг" />
                <div className={styles.hiddenBox}>
                  <h3 className={styles.hiddenBoxTitle}>Паркинг</h3>
                  <ButtonLink
                    className={styles.thumbButton}
                    label="подробнее"
                    onClick={() => {}}
                    variant="transparent"
                  />
                </div>
              </div>
              <div className={styles.bottomBoxThumb}>
                <img src={bottomCenterImg} alt="Обычный ЖК" />
                <div className={styles.hiddenBox}>
                  <h3 className={styles.hiddenBoxTitle}>Обычный ЖК</h3>
                  <ButtonLink
                    className={styles.thumbButton}
                    label="подробнее"
                    onClick={() => {}}
                    variant="transparent"
                  />
                </div>
              </div>
              <div className={styles.bottomBoxThumb}>
                <img src={bottomRightImg} alt="Парк будущего" />
                <div className={styles.hiddenBox}>
                  <h3 className={styles.hiddenBoxTitle}>Парк будущего</h3>
                  <ButtonLink
                    className={styles.thumbButton}
                    label="подробнее"
                    onClick={() => {}}
                    variant="transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          <ButtonLink
            className={styles.button}
            label="все проекты"
            variant="black"
            onClick={() => {}}
          />
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
