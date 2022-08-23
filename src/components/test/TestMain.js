import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../recoil/User";

import fox2 from "../../images/testfox.png";
import styles from "./TestMain.module.css"

function TestMain(){

  const navigate = useNavigate();
  const a = useRecoilValue(nicknameState)

  const onClickEvent = (event) => {
    event.preventDefault();
    navigate("/testqna?name="+a);
  }

  return (
    <div className={styles.bdbox}>
      <div className={styles.box}>
        <div className={styles.title}>📖 학습 유형 테스트 ✏</div>
        <div className={styles.info}>5분만에 나에게 딱 맞는 학습법 찾기!</div>
        <div><img className={styles.fox} src={fox2} ></img></div>
        <div className={styles.info2}>나는 혼자 공부하는게 잘 맞을까? 같이 공부하는게 잘 맞을까? </div>
        <div className={styles.info2}> 어떻게 공부해야할 지 모르겠다면? 지금 바로 자신의 학습 유형을 알아보세요.</div>
        <button className={styles.home_button} onClick={onClickEvent}>테스트 시작하기 <BsFillArrowRightCircleFill/></button>
      </div>
    </div>
  )

}

export default TestMain;