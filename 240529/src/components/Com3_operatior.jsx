const Com3_operatior = () => {
  const border = { border: '1px solid #000', padding: 10, width: '80%' }

  const done1 = true;
  const done2 = false;
  const done3 = undefined;

  return (
    <>
      <h2>삼항 연산자</h2>
      <p style={border}>
        { done1 === true ? <button>참 버튼</button> : <button>거짓 버튼</button> }
      </p>

      <h2>단락회로평가</h2>
      <strong>&& 연산자</strong>
      <p style={border}>{ done1 && <em>A, B 조건 모두 참인 경우 보임</em> }</p>

      <strong>|| 연산자 : A조건이 참인 경우 뒤의 조건까지 읽지 않아도 참이기 때문에 멈춤</strong>
      <p style={border}>{ done1 || <button>A조건이 참인 경우 이 버튼은 보이지 않음</button> }</p>
      <p style={border}>{ done2 || <button>A조건이 거짓인 경우 이 버튼은 보임</button> }</p>

      <strong>undefined</strong>
      <p style={border}>{ done3 || <em>undefined는 뒤의 조건을 읽음</em> }</p>
    </>
  );
};

export default Com3_operatior;