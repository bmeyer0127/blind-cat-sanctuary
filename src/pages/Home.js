import styles from "./Home.module.css";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ModalBackdrop from "../components/ModalBackdrop";
import { useState } from "react";

function Home() {
  const [showOnceModal, setShowOnceModal] = useState(false);
  const [showMonthlyModal, setShowMonthlyModal] = useState(false);

  function openOnceModalHandler() {
    setShowOnceModal(true);
  }

  function closeOnceModalHandler() {
    setShowOnceModal(false);
  }

  function openMonthlyModalHandler() {
    setShowMonthlyModal(true);
  }

  function closeMonthlyModalHandler() {
    setShowMonthlyModal(false);
  }

  return (
    <div className="styles.homeContainer">
      <h2 className={styles.welcome}>
        Welcome to the (un)official web page for Blind Cat Rescue & Sanctuary,
        Inc
      </h2>
      <img
        src="https://www.boredpanda.com/blog/wp-content/uploads/2022/03/Meet-Dmitri-the-rescued-blind-kitten-who-has-more-than-1-million-and-four-hundred-followers-on-his-social-networks-623045aee31d3__700.jpg"
        alt="blind cat"
        className={styles.blindCatImg}
      ></img>
      <p className={styles.story}>
        We are a lifetime cat care sanctuary located in St. Pauls, North
        Carolina (USA).
        <br />
        <br />
        In 2005, we built our first building as a safe place for blind cats who
        were deemed not adoptable by regular shelters and were going to be
        euthanized because they were blind. In 2011, we built a second shelter
        to provide a safe place for Leukemia positive (FELV+) and Feline
        Immunodeficiency Virus (FIV+) cats who otherwise would be killed because
        they tested positive for these viruses.
        <br />
        <br />
        We are a registered non-profit 501©3 in the state of North Carolina. Our
        tax identification number is 20-3410498. Your donations are
        tax-deductible, encrypted,and safe.
      </p>
      <div className={styles.frontDonateContainer}>
        <p className={styles.frontDonateText}>
          Now we humbly ask for your help. Will you consider becoming the cat's
          champion ...by making a gift today? Every little bit helps!
          <br />
          <br />
          You can donate once here if you would like.
          <br />
          <Button buttonType="once" onClick={openOnceModalHandler}>
            once
          </Button>
          <br />
          Or you could be a monthly sustainer here!
          <br />
          <Button buttonType="monthly" onClick={openMonthlyModalHandler}>
            monthly
          </Button>
          {showOnceModal && (
            <Modal modalType="donateOnce" onCancel={closeOnceModalHandler}>
              Looking to donate once?
            </Modal>
          )}
          {showOnceModal && <ModalBackdrop onClick={closeOnceModalHandler} />}
          {showMonthlyModal && (
            <Modal
              modalType="donateMonthly"
              onCancel={closeMonthlyModalHandler}
            >
              Looking to be a monthly donor?
            </Modal>
          )}
          {showMonthlyModal && (
            <ModalBackdrop onClick={closeMonthlyModalHandler} />
          )}
        </p>
      </div>
    </div>
  );
}

export default Home;
