import { FC } from "react";
import styles from "./ButtonLink.module.scss";
import cn from "clsx";
import { ReactComponent as ArrowRight } from "../../static/icons/arrow-right.svg";

type Props = {
  variant?: string;
  className?: string;
  label: string;
  onClick: () => void;
};

const ButtonLink: FC<Props> = ({ variant, className, label, onClick }) => {
  const isBlackVariant = variant === "black";
  const isTransparent = variant === "transparent";

  return (
    <a
      href=""
      onClick={() => onClick()}
      className={cn(
        styles.link,
        isBlackVariant && styles.blackLink,
        isTransparent && styles.transparentLink,
        className
      )}
    >
      {label} <ArrowRight className={styles.linkIcon} />
    </a>
  );
};

export default ButtonLink;
