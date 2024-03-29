import styles from "./style";
import { Description, Form, Question, Accessibility, Navbar, Stats, Overpriced, HomePage, Simulation, Innovation, Counter } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HomePage />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Question />
        <Description />
        <Simulation />
        <Accessibility />
        <Overpriced />
        <Innovation />
        <Counter />
        <Form />
      </div>
    </div>
  </div>
);

export default App;
