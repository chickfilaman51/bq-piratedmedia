import { apple, sources, google } from "../assets";
import styles, { layout } from "../style";

const Description = () => (
  <section id="description" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={sources} alt="sources" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Innovation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        It depends. While Pirated Media is inherently wrong by the law, there are some advantages to allowing people full access to all media. Overall, it is ethical because of the accessibility that will occur, the reduction of overpriced media, and the innovation.
      </p>

      
    </div>
  </section>
);

export default Description;
