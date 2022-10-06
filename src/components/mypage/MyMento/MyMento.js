import styles from "./MyMento.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import animal from "../../../images/animal.png"
import axios from "axios";
import MyMentoJournal from "./MyMentoJournal";
import MyMtJournalDetail from "./MyMtJournalDetail";
import MyNavbar from "../MyNavbar";
import { useRecoilValue } from "recoil";
import { ProceedeState, ProceedState, ProceedtState, ProNumState } from "../../../recoil/ProceedState";

function MyMento() {
  const activeStyle = {
    color: 'blue',
    textDecoration: "none"
  };
  const unactiveStyle = {
    color: 'black',
    textDecoration: "none"
  };

  //멘토, 멘티 구분
  const navigate = useNavigate();
  const [role, setRole] = useState("O");

  const onClickMentor = () => {
    setRole("O");
    console.log('지금 역할은?', role);
  }

  const onClickMentee = () => {
    setRole("E");
    console.log('지금 역할은!! 멘티여야함!', role);
  }

  const url = 'http://localhost:8080';
  const [geul, setGeul] = useState(null);
  const [menNo, setMenNo] = useState(0);

  
  const proceedt = useRecoilValue(ProceedtState);
  const proceede = useRecoilValue(ProceedeState); 

  const [mtitle, setMtitle] = useState('');
  const [current, setCurrent] = useState(null);


  //멘토링 일지 조회
  const getList = () => {
    try {
       axios.get(`${url}/mentoring/log`)
       //axios.get('/dummyMyMento.json')
        .then((res) => {
            role === "O" ? setGeul(res.data.mentor) : setGeul(res.data.mentee)        
          })
    }
    catch (err) {
      console.log("err", err)
    }
  }

  const clickBtn = () => {
    // if((role === "O" && proceedt === "진행 중") || (role === "E" && proceede === "진행 중"))
      setShowPopup(true);
  }

  useEffect(() => {
    getList();
  }, [role])

  //팝업
  const [showPopup, setShowPopup] = useState(false);
  const [showSPopup, setShowSPopup] = useState(false);

  const onView = (id) => {
    setCurrent(geul && geul.map(({logList}) => logList.find(({log_no}) => log_no === id))[0])
    console.log('current is.. ', current );

  }

  const togglePopup = () => {
    setShowPopup(current => !current);

  };

  const toggleSPopup = () => {

    setShowSPopup(current => !current);

  };

  const onClickProceedBar = () => {
    if(proceedt === "진행 중" || proceede === "진행 중") {
    const value = window.confirm("멘토링이 완료되었나요?");
        if (value) {
          const qst = window.confirm('파트너에 대한 후기 작성이 가능합니다. 후기 페이지로 이동하시겠습니까?');
          if(qst) {
            navigate('/review',{
              state: {menNo: menNo, role: role}
            });
          }
          
        }
      }

    
  }

  return (
    <div className={styles.wrap}>
        <MyNavbar />

        
        <div className={styles.body}>
          <div className={styles.right}>
            <div className={styles.menu}>
              <span className={styles.submenu} onClick={onClickMentor} >멘토</span> <span className={styles.bar}> </span> <span className={styles.submenu} onClick={onClickMentee}>멘티</span>
            </div>
            { geul && geul.map((item) => (
            <div key={item.mentoring_no} onMouseEnter={() => setMenNo(item.mentoring_no)} >
              
            <div className={styles.state_menu}>
              <span className={styles.state_submenu} onClick={onClickProceedBar}>{role === "O" ? proceedt : proceede}</span>
            </div>

            <div className={styles.bigBox}>
              <h2 className={styles.mymenu}>{item.m_title}</h2>
              <div className={styles.profileBox}>
                <div className={styles.ptitle}>{role === "O" ? '멘티' : '멘토'} 상세 정보</div>
                <div className={styles.pinBox}>
                  <img src={animal} className={styles.img} />
                      
                      { item.applicant &&
                      <div>                        
                        <div className={styles.desc1}>이름: {role === "O" ? item.applicant.name : item.writer.name }</div>
                        <div className={styles.desc1}>나이: {role === "O" ? item.applicant.age : item.writer.age } 세</div>
                        <div className={styles.desc1}>이메일:{role === "O" ? item.applicant.email : item.writer.email}</div> 
                      </div>
} 
                </div>
              </div>

              <div className={styles.MemoBox}>
                <div className={styles.mtitle}>멘토링 일지</div>

                <div className={styles.minBox}>

                  {
                    item.logList && item.logList.map((d) => (
                    <div className={styles.subBox} key={d.log_no} onClick={toggleSPopup} onMouseOver={() => {onView(d.log_no);}}>
                      <div className={styles.desc}>{d.date}</div>
                      <div className={styles.desc1}>{d.title}</div>
                      <div className={styles.desc2}>{d.content}</div>
                    </div>
                  ))

                }
                </div>
                <BsPlusCircle size="32" color="#4673EA" onClick={clickBtn} className={styles.btn} />

              
              </div>

            </div>
            </div>
            ))}
          {showPopup && <MyMentoJournal togglePopup={togglePopup} menNo={menNo} />}
          {showSPopup && <MyMtJournalDetail toggleSPopup={toggleSPopup} current={current} />}

            </div>


      </div>

        
    </div>
  );
}

export default MyMento;