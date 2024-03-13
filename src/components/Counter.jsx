import { card, stealing } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Counter = () => (
  <section id = "counter" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Counterpoint: Stealing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Even though piracy allows for innovation and accessibility for the users, what about the authors? Many people argue this logic as it isn't fair that people can steal work for free. This is why I propose a solution: Ad Revenue. Ad Revenue from pirated websites can be shared with authors if they don't want a takedown. Additionally, pirated websites bring attention to authors, allowing for even more sales for them.
      </p>
    </div>

    <div className={`${layout.sectionImg} rounded-lg relative`}>
      <img src={stealing} alt="stealing" className="w-[100%] h-[auto]" />
    </div>
  </section>
);

export default Counter;
