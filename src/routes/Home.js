import React, {useState, useEffect} from "react";
import Home_Study from "../components/home/Home_Study";
import Mento from "../components/mentoring/Mento";
import Home_Banner from "../components/home/Home_Banner";

function Home() {

  //  // IP주소 변수 선언
  //  const [ip, setIp] = useState('');

  //  // IP주소 값을 설정합니다.
  //  function callback(data) {
  //    setIp(data);
  //  }
 
  //  // 첫번째 렌더링을 다 마친 후 실행합니다.
  //  useEffect(
  //    () => {
  //      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
  //      customAxios('/ip', callback);
  //    }, []
  //  );

  return (
    <div>
      <Home_Banner />
      <Mento />
      <Home_Study />
    </div>
  );
}

export default Home;