const Com2_map = () => {
  const mainStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    lineHeight: 1.6,
    border: '1px solid #000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center'
  }
  const colors = ['tomato','pink','orange','teal','lightblue'];
  /* 
    배열.map( (elem, index) => {} );
      - 새로운 배열로 반환
      - .map()을 사용시 고유성 유지를 위해 key 값 부여해야 함
      - 매개변수의 index는 단순 출력이 필요한 경우만 사용하는 걸 권장. key값으로 추천하지 않음
      - 삭제, 수정, 추가 등은 index가 아닌 key 사용
      - 대부분 안정적인 고유성을 부여하기 위해 배열 내부에 유니크한 번호를 작성하여 key로 사용
  */

  const bgs = [
    { id: 1, bg: 'tomato' },
    { id: 2, bg: 'pink' },
    { id: 3, bg: 'orange' },
    { id: 4, bg: 'teal' },
    { id: 5, bg: 'lightblue' },
  ]

  return (
    <>
      <h2>.map() 연습</h2>
      <ul style={mainStyle}>
        {/* {colors.map( (color, idx) => <li key={idx}>{color}</li>)} */}
        {
          bgs.map(bgs => {
            // console.log(bg);
            // return <li key={bg.id}>{bg.bg}</li>

            const {id, bg} = bgs; // 구조 분해 할당
            return <li key={id} style={{backgroundColor: bg}}>{bg}</li>
          })
        }
      </ul>
    </>
  );
};

export default Com2_map;