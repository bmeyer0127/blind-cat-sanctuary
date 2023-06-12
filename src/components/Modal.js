import styles from "./Modal.module.css";
import { getClasses } from "../utils/GetClasses";
import Button from "./Button";
import { Cancel } from "iconoir-react";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className={getClasses([styles.modal, styles[props.modalType]])}>
      <Button buttonType="exitModal" onClick={cancelHandler}>
        <Cancel height="30px" width="30px" />
      </Button>
      {props.children}
      <div className={styles.buttonContainer}>
        <Button buttonType="navigateToDonate" onClick={cancelHandler}>
          Yes!
        </Button>
        <Button buttonType="cancelDonation" onClick={cancelHandler}>
          Not Today
        </Button>
      </div>
    </div>
  );
}

export default Modal;
