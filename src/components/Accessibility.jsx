import { card, poverty } from "../assets";
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

    <div className={`${layout.sectionImg} rounded-lg relative`}>
      <img src={poverty} alt="poverty" className="w-[100%] h-[auto]" />
      <p className={`${styles.paragraph} max-w-[470px] mt-2 text-sm text-center absolute bottom-0 w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
        Graph of students in poverty who don't have access to books
      </p>
    </div>
  </section>
);

export default Accessibility;
