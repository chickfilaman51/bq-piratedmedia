import { quotes } from "../assets";
import ReactPlayer from 'react-player/youtube';

const FeedbackCard = ({ content, name, title, img, video }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />

    {img ? (
      <img src={img} alt={name} className="w-[200px] h-[200px] my-5 rounded-full object-cover object-center" />
    ) : (
      <ReactPlayer url={video} width="100%" height="200px" />
    )}

    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
