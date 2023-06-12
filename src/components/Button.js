import styles from "./Button.module.css";
import { getClasses } from "../utils/GetClasses";

function Button(props) {
  return (
    <button
      className={getClasses([styles.button, styles[props.buttonType]])}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
