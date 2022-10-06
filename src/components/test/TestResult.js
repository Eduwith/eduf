import axios from "axios";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import mbti from "../../common/result.json"
import styles from "./TestResult.module.css"

function TestResult() {

  let [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("res");
  const username = searchParams.get("name");
  const url = "http://localhost:8080";

  let e = 0, s = 0, t = 0, j = 0;

  for (let c = 0; c <= params.length; c++) {
    if (params[c] === 'E')
      e++;
    else if (params[c] === 'S')
      s++;
    else if (params[c] === 'T')
      t++;
    else if (params[c] === 'J')
      j++;
  }

  let result = [e >= 2 ? 'E' : 'I',
  s >= 2 ? 'S' : 'N',
  t >= 2 ? 'T' : 'F',
  j >= 2 ? 'J' : 'P'
  ];

  let count;
  outer: for (count = 0; count < 16; count++) {
    for (let i = 0; i < 4; i++) {
      if (mbti[count].id[i] !== result[i]) {
        break;
      } else if (i === 3) {
        break outer;
      }
    }
  }

  const sendMbti = async () => {
  try {
    console.log(mbti[count].id,'and ', mbti[count].nickname);
    const response = await axios.post(`${url}/api/userTest`,{
      mbti: mbti[count].id,
      animal: mbti[count].nickname
    });
    if(response) {
      if(response.data){
        console.log('mbti 결과 전송 완료 ', response.data)
      }
    };

  } catch (err) {
    console.log("Box search Error >>", err);
  }


  }

  useEffect(() => {
    sendMbti();
    console.log(result[0]);
  }, []);


  return (
    <div className={styles.bdbox}>
    <div className={styles.qbox}>
      <div className={styles.subtitle}>{username}님의 학습 유형은?</div>
      {/* <p className={styles.titlebt}>{mbti[count].id}</p> */}
      <p className={styles.title}>{mbti[count].nickname}</p>
      
      <img src={mbti[count].img} alt="결과 이미지" width="200px" height="200px" />
      <ul className={styles.desc}>
        {mbti[count].description.map((item) => {
          return (
            <li key={item.des}>
              💙 {item.des}
            </li>
          );
        })}
      </ul>
      <div>
      { result[0] === "E" ?
      <div>
        <div className={styles.rectitle}>여러 사람들과 즐겁게 스터디 해볼까요?😄</div>
        <Link to="/studies" className={styles.recbtn}>스터디 신청하기</Link>
      </div>
      
      :
      <div>
        <div className={styles.rectitle}>나와 잘 맞는 멘토/멘티와 함께 공부해 볼까요?😄</div>
        <Link to="/mentoring/mentor" className={styles.recbtn}>멘토링 신청하기</Link>
      </div>
      }
      </div>
      <Link to="/main" className={styles.homebtn}>메인 화면으로 가기</Link>
    </div>
    </div>
  )

}

export default TestResult;