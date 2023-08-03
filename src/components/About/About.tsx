import { FC } from "react";
import styles from "./About.module.scss";
import Container from "../Container/Container";
import topLeftImg from "../../static/images/aboutTopLeft.png";
import bottomLeftImg from "../../static/images/aboutBottomLeft.png";
import rightImg from "../../static/images/aboutRight.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import { aboutDataTasks } from "./data";

const About: FC = () => {
  return (
    <>
      <div className={styles.orangeBorder}></div>
      <section className={styles.aboutSection}>
        <Container>
          <div className={styles.topBlock}>
            <div className={styles.greyBox}>
              <div className={styles.forTwoImages}>
                <img className={styles.topLeftImg} src={topLeftImg} alt="" />
                <img
                  className={styles.bottomLeftImg}
                  src={bottomLeftImg}
                  alt=""
                />
              </div>
              <img className={styles.rightImg} src={rightImg} alt="" />
              <div className={styles.textBox}>
                <h2 className={styles.title}>О компании</h2>
                <p className={styles.text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <ButtonLink
                  className={styles.button}
                  label="читать"
                  onClick={() => {}}
                ></ButtonLink>
              </div>
            </div>
          </div>
          <div className={styles.bottomBlock}>
            <h2 className={styles.bottomTitle}>Основные задачи</h2>
            <div className={styles.tasksBox}>
              {aboutDataTasks &&
                aboutDataTasks.map((item, index) => (
                  <div className={styles.taskBoxItem}>
                    <p className={styles.countNumber}>{index + 1}</p>
                    <p className={styles.taskText}>{item.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
