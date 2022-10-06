import React, { useEffect, useState } from "react";
import MyNavbar from "../MyNavbar";
import {FaStar } from "react-icons/fa";
import styled from "styled-components";
import styles from "./MentoringReview.module.css";
import { FcReading } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ProceedeState, ProceedtState } from "../../../recoil/ProceedState";

function MentoringReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = 'http://localhost:8080';
  const menNo = location.state.menNo;
  const role = location.state.role;
  const [review, setReview] = useState('');
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [proceedt, setProceedt] = useRecoilState(ProceedtState);  
  const [proceede, setProceede] = useRecoilState(ProceedeState); 
  const array = [0, 1, 2, 3, 4];
  let score = clicked.filter(Boolean).length;

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
     setClicked(clickStates);
   };

   const onReviewHandler = (event) => {
    setReview(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

   const onClickPost = () => {
    axios.post(`${url}/mentoring/review`,{
          mentoring_no: menNo,
          star: score,
          review: review
        }).then((res) => {
          if(res.data.result === "SUCCESS"){
            alert('후기 등록이 완료되었습니다.');
            role === "O" ? setProceedt("완료") : setProceede("완료");
            navigate('/MyMento');
          }
          else {
            alert('')
          }
        })
  }

  const onClickCbtn = () => {
    navigate('/MyMento');
  }

  return (
    <div className={styles.wrap}>
      <MyNavbar />
      <div className={styles.body}>
      <div className={styles.title}>멘토링 후기 작성</div>

      <div className={styles.subtitle}><FcReading size="22"/> 그동안 멘토링은 어떠셨나요?</div>
      <div className={styles.starbox}>
        <span>별로예요</span>
      <Stars>
        {array.map((el) => (
            <FaStar
              key={el}
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
              size="45"
            />))}
      </Stars>
      <span>최고예요</span>
      </div>
      <div className={styles.score}>총점: {score} 점</div>
      
      <div className={styles.subtitle}><FcReading size="22"/> 간단한 멘토링 후기를 남겨주세요.</div>
      <textarea className={styles.reviewbox} value={review} onChange={onReviewHandler}/>

    <div className={styles.btnbox}>
      <button type="button"  className={styles.btn} onClick={onClickPost} >등록하기</button>
      <button type="button"  className={styles.cbtn} onClick={onClickCbtn} >돌아가기</button>
      </div>
    </div>
    </div>
  )
}

export default MentoringReview;


const Stars = styled.div`
display: flex;
padding-top: 12px;
margin: 0 2%;
border-radius: 5px;

& svg {
  color: #ddd;
  cursor: pointer;
}

:hover svg {
  color: #859fe5;
}

& svg:hover ~ svg {
  color: #ddd;
}

.yellowStar {
  color: #859fe5;
}
`;