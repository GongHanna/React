// 외부 data.js 문서 연결
import { useState } from "react";
import dataList from "../assets/DB/dataList";

const Com6_state3 = () => {
  // const [data, setData] = useState(dataList);
  const [data] = useState(dataList);

  return (
    <div>
      <h2>state - 외부 문서</h2>
      <table border={1}>
        <caption>메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>아메리카노</td>
            <td>녹차</td>
            <td>탄산수</td>
            <td>쿠키</td>
          </tr> x 4 */}

          {/* {data.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.coffee}</td>
              <td>{elem.tea}</td>
              <td>{elem.drinks}</td>
              <td>{elem.others}</td>
            </tr>
          ))} */}

          {data.map(({id, coffee, tea, drinks, others}) => (
            <tr key={id}>
              <td>{coffee}</td>
              <td>{tea}</td>
              <td>{drinks}</td>
              <td>{others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Com6_state3;
