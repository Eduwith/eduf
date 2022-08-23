import styles from "./MyPoint.module.css";
import { NavLink } from "react-router-dom";
import stampT from "../../images/stampT.png"
import stampF from "../../images/stampF.png"
import axios from "axios";
import { useEffect, useState } from "react";

function MyPoint() {

  const [stamp, setStamp] = useState(0);
  const [point, setPoint] = useState(0);
  const [stampDay, setStampDay] = useState(0);
  const [userPointList, setUserPointList] = useState(null);

  const activeStyle = {
    color: 'blue',
    textDecoration: "none"
  };
  const unactiveStyle = {
    color: 'black',
    textDecoration: "none"
  };
  const url = "http://localhost:8080";

  const getStampPoint = () => {
    axios.get(url+ '/user/attendance')
    .then((res) => {
      setStamp(res.data.stamp);
      setPoint(res.data.point);
         setStampDay(res.data.day);
         setUserPointList(res.data.useAttendance);
    })
    .catch((err) => {
      console.log('get stamp error :', err);
    })
  }

  const patchStampEvent = () => {
    axios.patch(url + '/user/attendance')
    .then((res) => {
      setStamp(res.data.stamp);
      setPoint(res.data.point);
    })
    .catch((err) => {
      console.log('patch stamp error :', err);
    })
  }

  const getPoint = () => {

  }

  useEffect(() => {
   getStampPoint();
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>MY PAGE</div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.left}>
            <ul className={styles.nav}>
              <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
              <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
              <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
              <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
              <li><NavLink to="/MyScrap" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
              <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
            </ul>
          </div>
          <div className={styles.right}>
            <span className={styles.mymenu}>출석체크</span>
            <button className={styles.stampBtn} onClick={patchStampEvent}>스탬프 받기</button>
          </div>

          <div className={styles.stampBorder}>
            <div className={styles.stampBox}>
              <span className={styles.stampTitle}>내 스탬프</span>
              <span className={styles.stampCnt}> <b>{stamp}</b> 개</span>
            </div>
            <div className={styles.stampSubBox}>
              {[...Array(stampDay)].map((n, index) => {

                return (<img src={stampT} className={styles.stampBd} key={index} />)
              })}
              {[...Array(7 - stampDay)].map((n, index) => {

                return (<img src={stampF} className={styles.stampBd} key={index} />)
              })}
            </div>
          </div>


          <div className={styles.pointBorder}>
            <div  className={styles.right}>
              <span className={styles.mymenu}>포인트 내역</span>
              <span className={styles.totalPoint}> {point === 0 ? `${point}` : `+${point}`} point</span>
            </div>
              
              {
                userPointList && userPointList.map((item) => {
                  <div className={styles.pointBox}>
                    <span className={styles.pointTitle}>{item.title}</span>
                    <span className={styles.pointDate}>{item.date}</span>
                    <span className={styles.pointNum}>+{item.point}p</span>
                  </div>
                })
              }

            

            {/* <div className={styles.pointBox}>
              <span className={styles.pointTitle}>포인트 내역</span>
              <span className={styles.pointNum}>+100p</span>
            </div>

            <div className={styles.pointBox}>
              <span className={styles.pointTitle}>포인트 내역</span>
              <span className={styles.pointNum}>+100p</span>
            </div> */}



          </div>
        </div>


      </div>
    </div>
  );
}

export default MyPoint;