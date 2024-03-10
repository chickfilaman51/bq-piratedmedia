import { apple, person, google } from "../assets";
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
    <div className="flex flex-col justify-center items-center">
      <img src={person} alt="person" className="w-[50%] h-[85%] relative z-[5]" />
    </div>
    <div className="flex flex-col justify-center items-center">
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Add views to actual media: </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        +1000 Views
      </button>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Add views to pirated media: </p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
        +1000 Views
      </button>
    </div>
  </section>
);

export default Simulation;
