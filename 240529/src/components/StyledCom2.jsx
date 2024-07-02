import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-color: #333;
  display: grid;
  place-items: center;
`;

// 사전 설정 필요. 실행 컴포넌트 앞에 작성
const mov = keyframes`
  25% { transform: translateY(-20px) rotate(20deg) }
  50% { transform: translateY(0) rotate(0) }
  75% { transform: translateY(-20px) rotate(-20deg) }
`;

const Ghost = styled.div`
  font-size: 5rem;
  animation: ${mov} .5s infinite ease-in-out;
`;

const StyledCom2 = () => {
  return (
    <>
      <h2>styled-components Animation</h2>
      <Container>
        <Ghost>👻</Ghost>
      </Container>
    </>
  );
};

export default StyledCom2;