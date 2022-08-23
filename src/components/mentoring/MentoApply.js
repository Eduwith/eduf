import React, { useState } from "react";
import styled from "styled-components";
import styles from "./MentoApply.module.css";
import pin from "../../images/animal.png";
import { ImCross } from "react-icons/im";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs";
import axios from "axios";

const Background = styled.div`
  position: fixed;
  z-index: 980;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height:100vh;
  background: grey;
  opacity: 0.9;
`;

const Box = styled.div`
  position: fixed;
  top: 13%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 990;
  width: 61vw;
  height: 71vh;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0px #4673EA;
  background: white;
`;


function MentoApply({ togglePopup, current}) {

  const [bmk, setBmk] = useState(false);
  const {m_no, title, name, field, m_period, way, region, keyword, info} = current;

  const onClickBMK = () => {
    setBmk(current => !current);
    console.log(m_no);
  }
  const url = 'http://localhost:8080';

  const onClick = () => {
    alert(`지원이 완료되었습니다.`);
    togglePopup(false);
    // try {
    //   axios.post(`${url}/mentoring/${m_no}/apply`, {
    //     m_no: m_no
    //   }).then(function (response) {
    //     if(response){
    //        console.log('전송 완료');
    //     }
    //     else
    //       console.log('정보 없음');
    //   });
    // }
    // catch(err) {
    //   console.log('err : ', err);
    // }
  }


  return (
    <div >
      <Background  onClick={togglePopup} />
       <Box>
            
            <div>
              <div className={styles.bin}>
               { bmk ? <BsBookmarkStarFill size="30" className={styles.book} onClick={onClickBMK} /> : <BsBookmarkStar size="30" className={styles.book} onClick={onClickBMK} /> }
                <div className={styles.title}>{title}</div>
                <ImCross size="20" className={styles.x} onClick={togglePopup} />
              </div>
              <div className={styles.box}>
                <img className={styles.pic} src={pin} alt="mentopic" />
                <div className={styles.content}>
                  <div className={styles.sub_box}>
                    <p><span className={styles.content_span}>멘토</span> <span className={styles.content_span2}>{name}</span></p>
                    <p><span  className={styles.content_span3}>멘토링 기간</span> <span className={styles.content_span2}>{m_period}개월 이상</span></p>
                  </div>
                  <div className={styles.sub_box}>
                    <p><span className={styles.content_span}>분야</span> <span className={styles.content_span2}>{field}</span></p>
                    <p><span className={styles.content_span3}>강의 방식</span> <span className={styles.content_span2}>{way === "ON" ? '온라인' : '오프라인'}</span></p>
                  </div>
                  <p><span className={styles.content_span}>지역</span> <span className={styles.content_region}>{region}</span></p>
                  <p><span className={styles.content_span}>특징</span> <span className={styles.content_keyword}>#{keyword}</span></p>
                  <p><span className={styles.content_span}>소개</span> <span className={styles.content_info}>{info}</span></p>
                </div>
              </div>
              <button className={styles.btn} onClick={onClick}>멘티 지원하기</button>
            </div>
           
      </Box> 
    </div>
  )
}

export default MentoApply;