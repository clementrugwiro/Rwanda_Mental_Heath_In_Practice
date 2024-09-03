import styles from "./TheWorkWeDo.module.scss";

const TheWorkWeDo = () => {
  return (
    <section className={styles.theWorkWeDo}>
      <div className={styles.imageContainer}>
        <img src="/images/image4.png" alt="The Work We Do" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.smallTitle}>
          <span>Our Work</span>
          <hr />
        </div>
        <h1 className={styles.bigTitle}>The Work We Do</h1>
        <p className={styles.paragraph}>
          Our organization is dedicated to developing innovative solutions aimed
          at empowering young people, particularly those facing the most
          challenging circumstances. We focus on addressing the unique needs of
          youth who are often marginalized or overlooked, striving to create
          opportunities that foster their growth and potential. Through our
          various programs and initiatives, we aim to uplift these individuals,
          providing them with the resources and support necessary to navigate
          their difficulties and build a brighter future.
        </p>
      </div>
    </section>
  );
};

export default TheWorkWeDo;
