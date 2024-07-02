import { useLocation, useNavigate } from "react-router-dom";
import { useParking } from "../context/ParkingContext";
import { useState, useEffect } from "react";

function Confirmation() {
  const { selectedParking, resetParking } = useParking();
  const nav = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // ReservationForm에서 설정한 time 값을 받아옴
  const selectedTime = queryParams.get("time");

  // 남은 시간
  const [timeLeft, setTimeLeft] = useState("");

  // 컴포넌트 생성시 한번만 동작이 필요할 때
  // 예약 폼에서 불러오는 시간이 달라질때만 useEffect 실행
  useEffect(() => {
    const countdown = () => {
      const now = new Date();
      const currentTime = now.getTime();

      // 오늘 날짜에 선택된 시간 설정
      const targetTime = new Date(
        // selectedTime = 11:53 -> split(":") -> [11, 53]
        // 첫번째 0 : 초, 두번째 0 : 밀리초
        // 11:53:00:00 (시:분:초:밀리초)
        now.setHours(
          selectedTime.split(":")[0],
          selectedTime.split(":")[1],
          0,
          0
        )
      ).getTime(); // 예약 폼에서 받아온 시간을 계산할 수 있게 밀리초 단위값으로 객체 설정

      // 밀리초로 계산을 위한 식(시간25 * 분60 * 초60 * 밀리초1000)
      const calc = now.getTime() - currentTime;
      const hours = Math.floor(
        (calc % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const min = Math.floor((calc % (60 * 60 * 1000)) / (1000 * 60));
      const sec = Math.floor((calc % (60 * 1000)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")} : ${min
          .toString()
          .padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`
      );
    };

    // 카운트다운 시작
    const countInit = setInterval(countdown, 1000);

    // 컴포넌트가 언마운트시 인터벌을 정리해 리액트의 기능에 도움을 줌
    return () => clearInterval(countInit);
  }, [selectedTime]);

  const handleCancel = () => {
    resetParking(); // 선택된 주차 정보 리셋
    alert("예약이 취소되었습니다");
    nav("/"); // 홈(첫페이지)으로 리디렉션
  };

  const handleChange = () => nav("/reservation");

  return (
    <div>
      <h2>예약 확인</h2>
      <div>
        <h3>입차까지 남은 시간</h3>
        <p>{timeLeft}</p>
      </div>
      <h3>주차 구역 : {selectedParking}</h3>

      <div>
        <button onClick={handleCancel}>예약 취소</button>
        <button onClick={handleChange}>예약 변경</button>
      </div>
    </div>
  );
}

export default Confirmation;
