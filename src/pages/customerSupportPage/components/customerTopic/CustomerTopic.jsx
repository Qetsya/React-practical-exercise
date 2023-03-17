import styles from "./CustomerTopic.module.css";

const CustomerTopic = () => {
  return (
    <div>
      <h2 className={styles.title}>Contact customer support</h2>
      <p className={styles.text}>
        We take every request into a consideration and we will reach out to you
        as fast as possible
      </p>
    </div>
  );
};

export default CustomerTopic;
