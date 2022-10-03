import styles from "./MyMento.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import animal from "../../../images/animal.png"
import axios from "axios";
import MyMentoJournal from "./MyMentoJournal";
import MyMtJournalDetail from "./MyMtJournalDetail";
import MyNavbar from "../MyNavbar";

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
  const [proceed, setProceed] = useState('진행 중');

  const onClickMentor = () => {
    setRole("O");
  }

  const onClickMentee = () => {
    setRole("E");
  }

  const url = 'http://localhost:8080';
  const [geul, setGeul] = useState([]);
  const [user, setUser] = useState([]);
  // const [logList, setLogList] = useState([]);  
  const [menNo, setMenNo] = useState(0);

  // useState([{
  //   "mentoring_no": 1,
  //   "title": "멘토링 일지",
  //   "content": "멘토링 일지 샘플입니다.",
  //   "date": "2022-08-01"
  // }]);
  const [mtitle, setMtitle] = useState('');
  const [current, setCurrent] = useState(null);


  //멘토링 일지 조회

  const getList = () => {
    try {
       axios.get(`${url}/mentoring/log/list`)
      // axios.get('/dummyMyMento.json')
        .then((res) => {
          if (res.data) {           
            res.data.map((item) => setGeul(item))
            console.log(geul);
          }
            console.log(res.data.mentoring_no);
            console.log(res.data.logList);
            
            // setUser(res.data.user);
            // setLogList(res.data.logList);
            // setMtitle(res.data.m_title);
          })
    }
    catch (err) {
      console.log("err", err)
    }
  }

  const clickBtn = () => {
    setShowPopup(true);
  }

  useEffect(() => {
    getList();
  }, [])


  //팝업
  const [showPopup, setShowPopup] = useState(false);
  const [showSPopup, setShowSPopup] = useState(false);

  const onView = (id) => {
    setCurrent(geul && geul.logList.find(item => item.log_no === id));
    console.log(current, 'current');
  }

  const togglePopup = () => {
    setShowPopup(current => !current);

  };

  const toggleSPopup = () => {

    setShowSPopup(current => !current);

  };

  const onClickProceedBar = () => {
    if(proceed === '진행 중') {
    const value = window.confirm("멘토링이 완료되었나요?");
        if (value) {
          const qst = window.confirm('파트너에 대한 후기 작성이 가능합니다. 후기 페이지로 이동하시겠습니까?');
          if(qst) {
            navigate('/review');
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

            <div className={styles.state_menu}>
              <span className={styles.state_submenu} onClick={onClickProceedBar}>{proceed}</span>
            </div>

            <div className={styles.bigBox}>
              <h2 className={styles.mymenu}>{mtitle}</h2>
              <div className={styles.profileBox}>
                <div className={styles.ptitle}>{role === "O" ? '멘티' : '멘토'} 상세 정보</div>
                <div className={styles.pinBox}>
                  <img src={animal} className={styles.img} />
                      
                      { geul.user &&
                      <div>                        
                        <div className={styles.desc1}>이름: {geul.user.name}</div>
                        <div className={styles.desc}>나이: {geul.user.age} 세</div>
                        <div className={styles.desc}>이메일:{geul.user.email}</div> 
                      </div>
} 
                </div>
              </div>

              <div className={styles.MemoBox}>
                <div className={styles.mtitle}>멘토링 일지</div>

                <div className={styles.minBox}>

                  {
                    geul.logList && geul.logList.map((item) => (
                    <div className={styles.subBox} key={item.log_no} onClick={toggleSPopup} onMouseOver={() => {onView(item.log_no);}}>
                      <div className={styles.desc}>{item.date}</div>
                      <div className={styles.desc}>{item.title}</div>
                      <div className={styles.desc2}>{item.content}</div>
                    </div>
                  ))

                }
                </div>
                <BsPlusCircle size="32" color="#4673EA" onClick={clickBtn} className={styles.btn} />

                {showPopup && <MyMentoJournal togglePopup={togglePopup} menNo={menNo} />}
                {showSPopup && <MyMtJournalDetail toggleSPopup={toggleSPopup} current={current} />}
              </div>

            </div>


            </div>


      </div>
    </div>
  );
}

export default MyMento;