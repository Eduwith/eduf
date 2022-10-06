import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MyApplyList.module.css";

function MyApplyList() {

  const [myAList, setMyAList] = useState([]);
  const [applyNo, setApplyNo] = useState(0);
  const [Mno, setMno] = useState(0);
  const url = 'http://localhost:8080';

  const getApplyList = () => {
    try {
        axios.get(`${url}/mypage/apply`)
        .then((res) => {
          if(res.data){
            setMyAList(res.data);
          }
          console.log('myAList', myAList);
        })
    }
    catch (err) {
      console.log('list get error', err);
    }

  }

  const applyUrgeEvent = () => {
    axios.post(`${url}/${Mno}/apply/${applyNo}/urge`, {
      m_no: Mno,
      apply_no: applyNo
    })
    .then((res) => {
      if(res.data.result) {
        alert('독촉 알림을 전송했습니다.')
      }
    })
  }

  const applyCancelEvent = () => {
    axios.delete(`${url}/mypage/apply/${applyNo}`)
          .then((res) => {
            if(res.data.result) {
              alert('멘토링 신청을 취소했습니다.')
              window.location.reload();
            }
          })
  }
  
  useEffect(() => {
    getApplyList();
  }, [])
  
  return(
    <div>
       <h2 className={styles.mymenu}>나의 신청 내역 </h2>
            <div className={styles.mymenu2}>
            {
                myAList && myAList.map((item) => (
                  <div key={item.m_no} className={styles.applyBox} onMouseEnter={() => {setApplyNo(item.apply_no); setMno(item.m_no.m_no);}}>
                    [{item.m_no.field}] {item.m_no.title}
                    <button type="button" className={styles.urgeCbtn} onClick={applyUrgeEvent}>수락독촉</button>  
                  <button type="button" className={styles.applyCbtn} onClick={applyCancelEvent}>취소하기</button>
                  </div>
                
                ))
            }
            
            </div>
    </div>
  )
}

export default MyApplyList;