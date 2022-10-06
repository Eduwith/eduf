import Navbar from "../../home/Navbar";
import styles from "./MyMentoApply.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MyWroteGeul from "./MyWroteGeul";
import MyApplyList from "./MyApplyList";
import MyNavbar from "../MyNavbar";

function MyMentoApply() {
  const [myList, setMyList] = useState([]);

  const url = 'http://localhost:8080';
  //const url = 'http://34.64.249.190:8080';
  const [role, setRole] = useState("O");

  const getList = () => {
    try {
       axios.get(url + '/mentoring/mypage/mentoring')
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
        <MyNavbar />
        <div className={styles.body}>
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

  );
}

export default MyMentoApply;