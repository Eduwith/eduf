import Navbar from "../../home/Navbar";
import styles from "./MyMentoApply.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MyWroteGeul from "../MyWroteGeul";
import MyApplyList from "./MyApplyList";

function MyMentoApply() {
  const activeStyle = {
    color: 'blue',
    textDecoration: "none"
  };
  const unactiveStyle = {
    color: 'black',
    textDecoration: "none"
  };
  const [myList, setMyList] = useState([]);

  const url = 'http://localhost:8080';
  //const url = 'http://34.64.249.190:8080';
  const [role, setRole] = useState("O");

  const getList = () => {
    try {
       axios.get(url + '/mentoring/mypage/mentoring')
      //axios.get('/dummyMtData.json')
        .then((res) => {
          //역할에 맞는 글 가져오기
          role === "O" ? setMyList(res.data.mentor) : setMyList(res.data.mentee)

          console.log('myList', myList);
        })
    }
    catch (err) {
      console.log('list get error', err);
    }

  }

  const onClickMentor = () => {
    setRole("O");
  }

  const onClickMentee = () => {
    setRole("E");
  }
  
  useEffect(() => {
    getList();
    //getAcceptList();
  }, [role])

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
            <div className={styles.menu}>
              <span className={styles.submenu} onClick={onClickMentor}>멘토</span> <span className={styles.bar}> </span> <span className={styles.submenu} onClick={onClickMentee}>멘티</span>
            </div>
            <h2 className={styles.mymenu}>내가 작성한 글 </h2>
            <div>
              {
                myList && myList.map((item) => (
                  <MyWroteGeul key={item.m_no} item={item} />
                ))
              }
            </div>

           <MyApplyList />

          </div>
        </div>

      </div>
    </div>
  );
}

export default MyMentoApply;