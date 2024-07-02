import { Fragment } from "react";

const title = "변수의 활용";

const mainStyle = {
  backgroundColor: 'salmon',
  padding: 10,
  color: 'teal',
  fontSize: 20
}

const Com1_const = () => {
  const latte = "카페라떼";
  const size = "tall";
  const price = 4000;
  let listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 10,
    lineHeight: 1.6,
    borderBottom: '1px solid #000'
  }

  return (
    <Fragment>
      <h2 style={mainStyle}>{title}</h2>
      <ul>
        <li style={{listStyle: 'none',padding: 0,margin: 10,lineHeight: 1.6,borderBottom: '1px solid #000'}}>{latte}</li>
        <li style={listStyle}>{size}</li>
        <li style={listStyle}>{price}</li>
      </ul>
    </Fragment>
  );
};

export default Com1_const;