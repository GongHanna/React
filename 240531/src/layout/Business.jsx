import img1 from "../assets/images/b_img01.jpg";
import img2 from "../assets/images/b_img02.jpg";
import img3 from "../assets/images/b_img03.jpg";
import img4 from "../assets/images/b_img04.jpg";
import './business.css';
// const data = [
//   { id: 1, mainTitle: "국내자원개발", subTitle: "Domestic resource", desc: "경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다." },
//   { id: 2, mainTitle: "해외자원개발", subTitle: "Oversea resource", desc: "호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고 있습니다." },
//   { id: 3, mainTitle: "엔지니어링사업", subTitle: "Engineering", desc: "축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종 Plant 설계 및 시공 기술을 보유하고 있습니다." },
//   { id: 4, mainTitle: "임대사업", subTitle: "Building Lease", desc: "쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다." },
// ]

const Business = () => {
  return (
    <article className='business'>
      <h2>business</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

      <ul className='businessList'>
        <li className='businessItem'>
          <a href="#">
            <div className="businessImg">
              <img src={img1} alt="국내자원개발" />
            </div>
            <h3 className='title'>
              <strong>국내자원개발</strong>
              Domestic resource
            </h3>
            <p className='desc'>
            경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.
            </p>
          </a>
        </li>
        <li className='businessItem'>
          <a href="#">
            <div className="businessImg">
              <img src={img2} alt="해외자원개발" />
            </div>
            <h3 className='title'>
              <strong>해외자원개발</strong>
              Oversea resource
            </h3>
            <p className='desc'>
            호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고 있습니다.
            </p>
          </a>
        </li>
        <li className='businessItem'>
          <a href="#">
            <div className="businessImg">
              <img src={img3} alt="엔지니어링사업" />
            </div>
            <h3 className='title'>
              <strong>엔지니어링사업</strong>
              Engineering
            </h3>
            <p className='desc'>
            축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종 Plant 설계 및 시공 기술을 보유하고 있습니다.
            </p>
          </a>
        </li>
        <li className='businessItem'>
          <a href="#">
            <div className="businessImg">
              <img src={img4} alt="임대사업" />
            </div>
            <h3 className='title'>
              <strong>임대사업</strong>
              Building Lease
            </h3>
            <p className='desc'>
            쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.
            </p>
          </a>
        </li>
        
        {/* {
          data.map((list) => (
            <li key={list.id}>
              <h3 className='mainTitle'>{list.mainTitle}</h3>
              <h4 className='mainTitle'>{list.subTitle}</h4>
              <p className='desc'>{list.desc}</p>
            </li>
          ))
        } */}
      </ul>

      <a href="#" className="primaryBtn">
        view more
      </a>
    </article>
  );
};

export default Business;