import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./MyWroteGeul.module.css"
import { GoPencil, GoTrashcan } from 'react-icons/go';

function MyWroteGeul({ item }) {
  const navigate = useNavigate();
  // const [delNum, setDelNum] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     window.location.reload();
  //   }
  // }, [delNum]);

  const { m_no, role, title, name, field, info, keyword, m_period, mentoringApply, way, region } = item;

  //const url = 'http://34,64,249,190:8080';
  const url = 'http://localhost:8080';
  const [applyNo, setApplyNo] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [idx, setIdx] = useState(0);
  const [userProfile, setUserProfile] = useState({});


  const acceptClick = () => {
      axios.post(`${url}/mypage/${m_no}/apply/${applyNo}`, {
      m_no: m_no,
      apply_no: applyNo
      }).then((res) => {
        if (res.data.result === "SUCCESS") {
        alert('멘티 신청을 수락했습니다.');
        window.location.reload();
        //window.scrollTo(0, 0);
        }
      }).catch(err => {
        console.log('list get error', err);
      })
  }

  const rejectClick = async () => {
    console.log('an', userInfo.apply_no);
    console.log(userInfo)
    try{
      const response = await axios.delete(`${url}/mypage/${m_no}/apply/${applyNo}`);
      if(response.data){
        alert('신청을 거절하였습니다.');
        console.log(response.data, 'delete');
        window.location.reload();
        
      }
      
    }
    catch (err) {
      alert(err);
    }
    
    window.scrollTo(0, 0);
  }

  const getProfile = () => {
    axios.get(`${url}/mypage/${applyNo}/profile`)
      .then((res) => {
        if(res.data){
          setUserProfile(res.data);
        }
      })
  }

  useEffect(() => {
    getProfile();
  },[applyNo]);
  
  const onClickEvent = () => {
    // alert(`email: ${userInfo.email} & 이름: ${userInfo.name} & 나이: ${userInfo.age}`)

          alert(`email: ${userProfile.email} & 이름: ${userProfile.name} & 나이: ${userProfile.age}`)

  }

  const deleteGeul = () => {
    axios.delete(`${url}/mentoring/${m_no}`)
    .then((res) => {
      if(res.data.result) {
        const value = window.confirm("정말로 삭제하시겠습니까?");
        if (value) {
          alert('삭제되었습니다.');
          window.location.reload();
        }
      }
    })
    
  }

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>{title}</div>

        </div>

        <div className={styles.sub_box}>

          <p><span className={styles.content_span}>멘토</span> <span className={styles.content_span2}>{name}</span></p>
          <p><span className={styles.content_span3}>멘토링 기간</span> <span className={styles.content_span2}>{m_period}개월 이상</span></p>
        </div>
        <div className={styles.sub_box}>
          <p><span className={styles.content_span}>분야</span> <span className={styles.content_span2}>{field}</span></p>
          <p><span className={styles.content_span3}>강의 방식</span> <span className={styles.content_span2}>{way === "ON" ? '온라인' : '오프라인'}</span></p>
        </div>
        <p><span className={styles.content_span}>지역</span> <span className={styles.content_region}>{region}</span>
          <span className={styles.content_span}>특징</span> <span className={styles.content_keyword}>#{keyword}</span></p>
        <p><span className={styles.content_span}>소개</span> <span className={styles.content_info}>{info}</span></p>

        <span className={styles.pencil} onClick= {() => {navigate(`/myEditRecruit/${m_no}`, {
          state: {
            m_no: m_no,
            role: role,
            title: title,
            m_period: m_period,
            field: field,
            way: way,
            region: region,
            keyword: keyword,
            info: info,
          }
        })}}
        
          ><GoPencil /></span>
        <span className={styles.trash} onClick= {deleteGeul}><GoTrashcan /></span>

      </div>
      {/* 1. 내가 작성한 글이랑 신청한 사람 목록 조회 / 모집글 작성 버튼 보내기 */}

      {
        mentoringApply && mentoringApply.map((item, idx) => (

          <div className={styles.box2} key={item.apply_no} onMouseEnter={() => { setApplyNo(item.apply_no); setIdx(idx); setUserInfo(mentoringApply[Object.keys(mentoringApply)[idx]]); }}>{/* 신청자 조회 map 함수*/}
            <div className={styles.inner_box2}>
              <span className={styles.name}>{item.name}</span> 님이 {role === "O" ? '멘티' : '멘토'}를 신청하였습니다.
              <span className={styles.detailbtn} onClick={onClickEvent}>상세 보기 {'>'}</span>
              <div className={styles.btnbox}>
                <button onClick={acceptClick} className={styles.acceptbtn} >수락</button>
                <button onClick={rejectClick} className={styles.rejectbtn} >거절</button>
              </div>
            </div>
          </div>

        ))
      }

    </div>
  );
}

export default MyWroteGeul;