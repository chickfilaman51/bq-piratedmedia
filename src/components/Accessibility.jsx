import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Accessibility = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Accessibility
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Many lower-classed students and adults alike don't have access to expensive textbooks and materials that they need to succeed. To make it equal for everyone, we need to allow expensive media to be shared publicly for free.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Accessibility;
