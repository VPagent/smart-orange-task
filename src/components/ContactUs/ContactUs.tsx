import { FC, SyntheticEvent, useState } from "react";
import styles from "./ContactUs.module.scss";
import Container from "../Container/Container";
import contactUsImg from "../../static/images/contactUs.png";
import { ReactComponent as CheckIcon } from "../../static/icons/check.svg";
import ButtonLink from "../ButtonLink/ButtonLink";
import cn from "clsx";

const ContactUs: FC = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGood, setUserGood] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleChangeInput = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.currentTarget.id) {
      case "userName":
        return setUserName(e.currentTarget.value);
      case "userPhone":
        return setUserPhone(e.currentTarget.value);
      case "userEmail":
        return setUserEmail(e.currentTarget.value);
      case "userGood":
        return setUserGood(e.currentTarget.value);
      case "userMessage":
        return setUserMessage(e.currentTarget.value);
      default:
        return console.log("error in case");
    }
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}> Связаться с нами</h2>
          <div className={styles.formAndImageBox}>
            <form className={styles.form}>
              <label className={styles.label}>
                <input
                  onChange={handleChangeInput}
                  id="userName"
                  className={cn(styles.input, userName && styles.filled)}
                  type="text"
                />
                <span className={styles.placeholder}>Имя</span>
              </label>
              <label className={styles.label}>
                <input
                  onChange={handleChangeInput}
                  id="userPhone"
                  className={cn(styles.input, userPhone && styles.filled)}
                  type="number"
                />
                <span className={styles.placeholder}>
                  Номер телефона <span className={styles.redStar}>*</span>
                </span>
              </label>
              <label className={styles.label}>
                <input
                  onChange={handleChangeInput}
                  id="userEmail"
                  className={cn(styles.input, userEmail && styles.filled)}
                  type="email"
                />
                <span className={styles.placeholder}>
                  E-mail <span className={styles.redStar}>*</span>
                </span>
              </label>
              <label className={styles.label}>
                <input
                  onChange={handleChangeInput}
                  id="userGood"
                  className={cn(styles.input, userGood && styles.filled)}
                  type="text"
                />
                <span className={styles.placeholder}>
                  Интересующий товар/услуга
                </span>
              </label>
              <label className={styles.label}>
                <textarea
                  onChange={handleChangeInput}
                  id="userMessage"
                  className={cn(styles.textArea, userMessage && styles.filled)}
                ></textarea>
                <span className={styles.placeholder}>
                  Сообщение
                  <span className={styles.redStar}>*</span>
                </span>
                <CheckIcon className={styles.checkIcon} />
              </label>
            </form>
            <img className={styles.image} src={contactUsImg} alt="contact us" />
          </div>
          <p className={styles.text}>
            Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
          </p>
          <ButtonLink
            className={styles.button}
            label="отправить"
            variant="black"
            onClick={() => {}}
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
