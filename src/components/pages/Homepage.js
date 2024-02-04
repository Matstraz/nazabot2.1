import { css } from "aphrodite";
import icons from "../utils/Icons";
import styles from "../utils/Animations";

export default function Homepage() {
  return (
    <div className="bg-red-800">
      <div className={`${css(styles.pulse)}`}>{icons.left}</div>asd
    </div>
  );
}
