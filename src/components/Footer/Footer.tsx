import { FC } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import { infoData } from "./data";
import { ReactComponent as Location } from "../../static/icons/location.svg";
import { ReactComponent as Phone } from "../../static/icons/telephone.svg";
import { ReactComponent as Email } from "../../static/icons/email.svg";
import { ReactComponent as FaceBook } from "../../static/icons/facebook.svg";
import { ReactComponent as LinkedIn } from "../../static/icons/Linked.svg";
import { ReactComponent as Twitter } from "../../static/icons/twitter.svg";
import { ReactComponent as Pinterest } from "../../static/icons/pininterest.svg";
import logo from "../../static/images/logo.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <img src={logo} alt="logo" className={styles.logoIcon} />
        <div className={styles.infoBox}>
          <div className={styles.infoBoxItem}>
            <p className={styles.subTitle}>Информация</p>
            <div className={styles.infoLinkBox}>
              {infoData &&
                infoData.map((item) => (
                  <a key={item.id} className={styles.infoLink} href="">
                    {item.title}
                  </a>
                ))}
            </div>
          </div>
          <div className={styles.infoBoxItem}>
            <p className={styles.subTitle}>Контакты</p>
            <div className={styles.contactsBox}>
              <div className={styles.contactsBoxItem}>
                <Location className={styles.icon} />
                <p className={styles.itemText}>
                  100000, Республика Казахстан, <br /> г. Караганда, ул.
                  Телевизионная 10
                </p>
              </div>
              <div className={styles.contactsBoxItem}>
                <Phone className={styles.icon} />
                <p className={styles.itemText}>+38 (000) 000 00 00</p>
              </div>
              <div className={styles.contactsBoxItem}>
                <Email className={styles.icon} />
                <p className={styles.itemText}>mail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialBox}>
          <p className={styles.subTitle}>Социальные сети</p>
          <div className={styles.socialIconsBox}>
            <a href="" className={styles.socialLink}>
              <FaceBook className={styles.socialIcon} />
            </a>
            <a href="" className={styles.socialLink}>
              <Twitter className={styles.socialIcon} />
            </a>{" "}
            <a href="" className={styles.socialLink}>
              <LinkedIn className={styles.socialIcon} />
            </a>{" "}
            <a href="" className={styles.socialLink}>
              <Pinterest className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.border}></div>
      <div className={styles.copyWriteBox}>
        <p className={styles.copyWriteText}>
          © 2019 Digital Project. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
