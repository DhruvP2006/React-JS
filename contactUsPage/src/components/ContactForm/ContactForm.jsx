import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <button>VIA SUPPORT CHAT</button>
        <button>VIA CALL</button>
      </div>
      <div className={styles.contact_image}>
        <img src="public\images\Service 24_7-pana 1.svg" />
      </div>
    </section>
  );
};

export default ContactForm;
