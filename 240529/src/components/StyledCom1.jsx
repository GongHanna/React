import styled  from 'styled-components';

/* 
  styled-components 사용

  const 컴포넌트명 = styled.태그명` css 스타일`;
  const 컴포넌트명 = styled('태그')` css 스타일`;
*/
const Container = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 0 auto;
  width: 50vw;
`;
const Box1 = styled.article`
  background-color: orange;
  width: 80%;
  padding: 20px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: maroon;
    color: #fff;
  }
`;
const Box2 =styled('section')`
  border: 3px solid blueviolet;
  padding: 20px;
  font-weight: bold;
  margin: 20px;
`;
const Button = styled('button')`
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: #000;
  }
`;

const StyledCom1 = () => {
  return (
    <Container>
      <h2>styled-components</h2>
      <Box1>첫번째 박스</Box1>
      <Box2>두번째 박스</Box2>
      <Button>버튼 스타일</Button>
    </Container>
  );
};

export default StyledCom1;