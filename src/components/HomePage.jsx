import styles from "../style";
import { discount, piratedmedia } from "../assets";
import GetStarted from "./GetStarted";

const HomePage = () => {
  return (
    <section id="home" className={`flex md:flex-row my-16 flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Ethical or Not: <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Pirated Media</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Pirated Media is a common occurance happening in the status quo, with millions of shows and books being put onto websites on the internet. But the question is: is it realy unethical?
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-20 relative`}>
        <img src={piratedmedia} alt="billing" className="w-[140%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default HomePage;
