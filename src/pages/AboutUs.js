import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About Us!</h2>
      <br />
      <br />
      <p className={styles.aboutUsText}>
        Blind Cat Rescue was started in 2005 in St Pauls, NC (USA) by a mother
        and daughter team to answer the need for a safe place for blind cats
        that were deemed not adoptable by regular shelters. They were going to
        be killed just because they are blind.We got our first blind cat Louie
        when we were volunteering for the local shelter. A man was going to
        leave this 6 week old in the Petsmart parking lot if the shelter would
        not accept him. I found myself saying “I will take him.”
        <br />
        <br />
        Louie showed us just how normal a blind cat is. He climbed, ran, played
        and loved like a “normal” cat.
        <br />
        <br />
        He did not know he was blind, he knew he was a cat, he behaved like a
        “normal” cat. Then we got our second, third, and fourth blind cat. We
        discovered there were no resources for blind cats. They were regularly
        killed at shelters because they were considered not adoptable. In North
        Carolina it is actually in the law. If an animal is sick, injured or
        blind it may be killed immediately in animal control facilities. We feel
        we do not kill humans because they are blind, why on earth would you
        kill an animal for the same thing? We knew from living with blind cats
        that they are just normal cats. They have no clue they are blind, they
        know they are cats, they act like cats. We decided it was time to do it
        right and applied to become a non profit and 501©3 charity.
        <br />
        <br />
        Who would have ever dreamed what would have come from those four words?
        <br />
        <br />
        In 2011 we began providing a safe sanctuary for FELV+(
        <a
          className={styles.aboutUsLinks}
          href="http://www.vet.cornell.edu/fhc/Health_Information/brochure_felv.cfm?gclid=Cj0KEQiAwMLDBRDCh_r9sMvQ_88BEiQA6zuAQ0P58_pBULWNaJQwPjJJes95qayeiox225T2FCHuoaUaAhmC8P8HAQ"
        >
          leukemia positive
        </a>
        ) and FIV+ (
        <a
          className={styles.aboutUsLinks}
          href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-immunodeficiency-virus-fiv"
        >
          feline immunodeficiency virus
        </a>
        ) cats. FIV & FELV+ cats are killed daily at vets offices and shelters
        because they test positive for these viruses. We do not kill people
        because they have an immune system illness or leukemia, why would we
        kill a healthy animal because they test positive?
        <br />
        <br />
        Sadly if retested with a more accurate test before being killed, some
        would actually be false positives. NEVER EVER accept the results from a
        snap test if your cat tests positive! (That is the test your vet will
        have used) INSIST that they be retested with the IFA test for leukemia
        or Western Blot test for FIV. The test has to be sent out to an outside
        lab.
        <br />
        <br />
        If your cat test FIV+ and your vet suggest you kill it please find a
        better vet. New studies done by "
        <a
          className={styles.aboutUsLinks}
          href="http://www.catster.com/lifestyle/cat-health-vet-study-fiv-positive-cats-living-together"
        >
          Purdue University College of Veterinary Medicine
        </a>
        " shows that positive and negative cats can live together with no
        problems. FIV is spread by deep bloody biting fighting. Unfixed cats
        outside struggling for food and resources fight. Neuter them and feed
        them there is no reason to fight. Occasionally it is spread by a
        positive mother to her babies, but that is not as common. An FIV+ cat
        can live for years before becoming sick. When a cat reaches the point
        that our vet feels we can no longer provide them quality of life, we
        hold them and humanly let them go. We do not allow them to suffer.
      </p>
      <img
        className={styles.blindCat1}
        src="https://blindcatrescue.com/index_htm_files/434636.webp"
        alt="black and white blind cat"
      ></img>
    </div>
  );
}

export default AboutUs;
