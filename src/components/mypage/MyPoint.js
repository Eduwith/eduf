import styles from "./MyPoint.module.css";
import { NavLink } from "react-router-dom";
import stampT from "../../images/stampT.png"
import stampF from "../../images/stampF.png"
import axios from "axios";
import { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";

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
    axios.get(`${url}/user/attendance`)
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
    axios.patch(`${url}/user/attendance`)
    .then((res) => {
      setStamp(res.data.stamp);
      setPoint(res.data.point);
      window.location.reload();
    })
    .catch((err) => {
      console.log('patch stamp error :', err);
    })
    // setStamp(1);
    // setStampDay(1);
  }

  const getPoint = () => {

  }

  useEffect(() => {
   getStampPoint();
  }, [])

  return (
    <div className={styles.wrap}>
      <MyNavbar />
      <div className={styles.body}>
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
              <span className={styles.mymenu}>내 포인트</span>
              <span className={styles.totalPoint}> <b>{point}</b> point</span>
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
  );
}

export default MyPoint;