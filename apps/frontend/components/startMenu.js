import cn from "classnames";
import styles from "../components/startMenu.module.css";

export default function StartMenu({ className, onClick, title, desc }) {
  return (
    <div className={cn(styles.baseCard, className)} onClick={onClick}>
      <p className={styles.menuTitle}>{title}</p>
    </div>
  );
}
