import { Link } from "react-router-dom";
import icon from "../assets/images/home-icon.png";
import mainImg from "../assets/images/home-img1.png";
import HomeSlide from "./HomeSlide";

const Home = () => {
  return (
    <header>
      <h1>
        이제,<strong>진짜 아트를 보는 시간</strong>
      </h1>
      <Link to="/user">
        <img src={icon} alt="icon" />
      </Link>
      <img src={mainImg} alt="mainImg" />

      <HomeSlide />
    </header>
  );
};

export default Home;