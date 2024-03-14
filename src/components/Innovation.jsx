import { apple, sources, google, stocks, mark } from "../assets";
import styles, { layout } from "../style";

const Description = () => (
  <section id="innovation" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={mark} alt="sources" className="w-[75%] h-[100%] relative z-[5]" />
      <p className={`${styles.paragraph} max-w-[470px] mt-2 text-sm text-center absolute bottom-0 w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
        Mark Zuckerberg creating Facebook (Avila)
      </p>
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
        Lastly, Innovation will occur as more people and entrepeneurs will have access to resources than ever before. This increase in views of valuable educational material will cause more people to be working on new ideas, which will cause more innovation.
      </p>

      
    </div>
  </section>
);

export default Description;
