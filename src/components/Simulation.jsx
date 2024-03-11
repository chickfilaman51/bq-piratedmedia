import { useState } from "react";
import { person } from "../assets";
import styles, { layout } from "../style";

const Simulation = () => {
  const [actualViews, setActualViews] = useState(0);
  const [piratedViews, setPiratedViews] = useState(0);
  const [innovation, setInnovation] = useState(0);

  const handleActualViewsIncrease = () => {
    setActualViews(actualViews + 1000);
    calculateInnovation();
  };

  const handleActualViewsDecrease = () => {
    if (actualViews >= 1000) {
      setActualViews(actualViews - 1000);
      calculateInnovation();
    }
  };

  const handlePiratedViewsIncrease = () => {
    setPiratedViews(piratedViews + 1000);
    calculateInnovation();
  };

  const handlePiratedViewsDecrease = () => {
    if (piratedViews >= 1000) {
      setPiratedViews(piratedViews - 1000);
      calculateInnovation();
    }
  };

  const calculateInnovation = () => {
    const totalViews = actualViews + piratedViews;
    const increaseFactor = Math.floor(totalViews / 1000) * 0.001;
    setInnovation(increaseFactor * 100);
  };

  // Calculate profit
  const profit = (actualViews / 1000) * 1000 - (piratedViews / 1000) * 500;

  return (
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
        <h2 className={styles.heading3}>
          Amount of Profit: ${profit}
        </h2>
        <h2 className={styles.heading3}>
          Increase of Innovation: {innovation.toFixed(2)}%
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Amount of actual media views: {actualViews}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleActualViewsIncrease}>
          +1000 Views
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleActualViewsDecrease}>
          -1000 Views
        </button>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Amount of pirated media views: {piratedViews}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handlePiratedViewsIncrease}>
          +1000 Views
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handlePiratedViewsDecrease}>
          -1000 Views
        </button>
      </div>
    </section>
  );
};

export default Simulation;
