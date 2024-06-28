import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const content = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-bold">Vinit</span>👋
      <br />A sofware developer and a
      <span className="font-bold">full-stack developer</span> based in
      <span className="font-bold"> India</span>.
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a full-stack developer in second year of my engineering degree."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="These are some of my projects that I have worked on."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need to contact me? Feel free to reach out to me."
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ CurrentStage }) => {
  return content[CurrentStage] || null;
};

export default HomeInfo;
