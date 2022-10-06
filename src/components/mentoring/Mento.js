import React, { useEffect, useState } from "react";
import styles from "./Mento.module.css";
import pic1 from '../../images/pin.png';
import { Link } from "react-router-dom";
import axios from "axios";

let category = ['진로', '교육', '문화예술스포츠', "기타"];
let cards = ['한이음', '박서윤', '김한음'];

function Mento() {
  const url = 'http://localhost:8080';
  const [geul, setGeul] = useState(null);
  const getList = async () => {
    try {
    const response = await axios.get(`${url}/mentoring/distance`);
    if(response) {
      setGeul(response.data);
    }
    }
    catch(err) {
      console.log('Home Mento list error', err);
    }
  }

  useEffect(() => {
    getList();
  },[])

  return (
    <div className={styles.bnd}>
      <div className={styles.top}>
        <div className={styles.title}>우리 동네 멘토링</div>
        <div className={styles.menu}>
          <ul>
            {category.map((item) =>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.btn}><Link to="/mentorRecruit" style={{textDecoration: "none", color: "white"}}>멘토 신청하기 {">"}</Link> </div>
      </div>

      <div className={styles.middle}>
      <div className={styles.detailBtn}><Link to="/mentoring/mentor" style={{textDecoration: "none", color: "#4673EA"}}>자세히 보기 {">"}</Link></div>
      {geul && geul.map((item) => (
        <div className={styles.card} key={item.m_no}>
          <img className={styles.pic1} src={pic1} alt="프로필" />
          <div>{item.title}</div>
          <div>분야: &nbsp;&nbsp;{item.field}</div>
          <div>이름: &nbsp;&nbsp;{item.name}</div>
          <button type="button" className={styles.detailbtn} >상세보기</button>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default Mento;