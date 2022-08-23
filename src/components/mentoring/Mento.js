import React from "react";
import styles from "./Mento.module.css";
import pic1 from '../../images/pin.png';

let category = ['진로', '교육', '문화예술스포츠', "기타"];
let cards = ['한이음', '박서윤', '김한음'];

function Mento() {
  return (
    <div className={styles.bnd}>
      <div className={styles.top}>
        <div className={styles.title}>나에게 맞는 멘토</div>
        <div className={styles.menu}>
          <ul>
            {category.map((item) =>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.btn}>멘토 신청하기 {">"}</div>
      </div>

      <div className={styles.middle}>
      <div className={styles.detailBtn}>자세히 보기 {">"}</div>
      {cards.map((item) => (
        <div className={styles.card} key={item}>
          <img className={styles.pic1} src={pic1} alt="프로필" />
          <div>{item}</div>
          <div>분야: &nbsp;&nbsp;교육</div>
          <div>소개: &nbsp;&nbsp;멘토</div>
          <button type="button" className={styles.detailbtn}>상세보기</button>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default Mento;