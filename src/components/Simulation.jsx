import { apple, sources, google } from "../assets";
import styles, { layout } from "../style";

const Simulation = () => (
  <section id="simulation" className={layout.sectionReverse}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A detailed <br className="sm:block hidden" /> Simulation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        On the right hand side is a simulation showing how much money the author of the media loses depending on how many people use the pirated media. It also shows the amount of innovation in the US. 
      </p>

      
    </div>
  </section>
);

export default Simulation;
