import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MyApplyList.module.css";

function MyApplyList() {

  const [myAList, setMyAList] = useState([]);
  const [applyMno, setApplyMno] = useState('');

  const getApplyList = () => {
    try {
        axios.get('http://localhost:8080/mypage/apply')
        .then((res) => {
          //역할에 맞는 글 가져오기
          setMyAList(res.data);

          console.log('myAList', myAList);
        })
    }
    catch (err) {
      console.log('list get error', err);
    }

  }

  const applyCancelEvent = () => {
    axios.delete(`http://localhost:8080/mentoring/${applyMno}`)
          .then((res) => {
            if(res.data) {
              const value = window.confirm("정말로 삭제하시겠습니까?");
              if (value) {
                alert('취소되었습니다.');
              }
            }
          })
  }
  
  useEffect(() => {
    getApplyList();
  }, [])
  
  return(
    <div>
       <h2 className={styles.mymenu}>나의 신청 내역 </h2>
            <div>
            {
                myAList && myAList.map((item) => (
                  <div key={item.m_no} className={styles.applyBox} onMouseEnter={() => {setApplyMno(item.m_no)}}>
                    [{item.field}] {item.title}
                  
                  <button type="button" className={styles.applyCbtn} onClick={applyCancelEvent}>취소하기</button>
                  </div>
                
                ))
            }
            </div>
    </div>
  )
}

export default MyApplyList;