import styles from "./ModalBackdrop.module.css";

function ModalBackdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClick} />;
}

export default ModalBackdrop;
