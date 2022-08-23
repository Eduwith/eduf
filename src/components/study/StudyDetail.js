import React from "react";
import styles from "./StudyDetail.module.css";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useL } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import scrapicon from "../../images/scrap.png";
import scrappedicon from "../../images/scrapped.png";
import closeicon from "../../images/close.png";
import peopleicon from "../../images/people.png";
//import slists from "../../data_study";


const Background = styled.div`
position: fixed;
z-index: 980;
left: 0;
top: 0;
overflow: hidden;
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #333333;
opacity: 0.2;
`;

function StudyDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const slist = location.state.data;
    const scrapYN = location.state.scrap;

    console.log(slist);
    console.log(location.state.scrap);

    const baseUrl = "http://localhost:8080";
    const apiStudyDetail = "http://localhost:8080/api/studies"+slist.s_no
    const postStudy = async () => {
        try {
            axios.post(apiStudyDetail, {
                s_no: slist.s_no,
                scrapYN: scrap
            }).then(function(response) {
                if(response.data){
                    console.log('스터디 신청 완료');
                  }
                  else{
                    alert('신청 실패');
                  }
            });
        } catch (e) {
            console.log(e);
        }
    };
    
    const [scrap, setScrap] = useState(scrapYN);
    const onClickScrap = () => {
        setScrap(current => !current);
    }

    const onClickApply = () => {
        alert('신청되었습니다.');
        //toggleStudyDetailPopup(false);
        postStudy();
    }
    const onClickClose = () => {
        //toggleStudyDetailPopup(false);
        navigate('/studies');
    }

    return(
        <div>
            <Background />
            <div className={styles.box}>
                <div className={styles.boxtop}>
                    {console.log(slist.title)}
                    <div className={styles.boxtitle}>{slist.title}</div>
                    { scrap ? <img src={scrappedicon} className={styles.scrap} onClick={onClickScrap}/> : <img src={scrapicon} className={styles.scrap} onClick={onClickScrap} /> } 
                    <img className={styles.close} src={closeicon} onClick={onClickClose}/>
                </div>
                <div>
                    <img src={peopleicon} className={styles.peopleicon} />
                    {slist.current_people} / {slist.total_people}
                </div>
                <div className={styles.boxtag}>
                    <div className={styles.tag}>#한글</div>
                    <div className={styles.tag}>#다문화</div>
                    <div className={styles.tag}>#문법</div>
                </div>
                <hr />
                <div className={styles.boxdetail}>
                    {slist.contents} <br /><br />
                    스터디기간 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {slist.s_period}개월<br/>
                    모집마감기한 &nbsp;&nbsp;&nbsp;&nbsp; {slist.r_end_date}
                    <hr />
                </div>
                <button className={styles.btn_apply} onClick={onClickApply}>신청하기</button>   
            </div>
        </div>
    );
}

export default StudyDetail;