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
    
    const [scrap, setScrap] = useState(scrapYN);
    const getScrap = (scrapYn, s_no) => {
        if (scrapYn == "Y")
        return <img src={scrapicon} className={styles.scrap} onClick={()=>onClickScrap(s_no, scrapYn)} />
        if (scrapYn == "N") return <img src={scrappedicon} className={styles.scrap} onClick={()=>onClickScrap(s_no, scrapYN)} />
    }
    const onClickScrap = (stdNo, scrapYN) => {
        if(scrapYN == "Y"){deleteScrap(stdNo);}
        if(scrapYN == "N"){postScrap(stdNo);}
    }

    const onClickApply = (stdNo) => {
        //toggleStudyDetailPopup(false);
        postStudy(stdNo);
    }
    const onClickClose = () => {
        //toggleStudyDetailPopup(false);
        navigate('/studies');
    }

    const baseUrl = "http://localhost:8080";
    //스터디 신청
    const postStudy = async (stdNo) => {
        try {
            const response = await axios.post(baseUrl+ `/api/studies/${stdNo}`);
            alert("스터디가 신청되었습니다")
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
        // try {
        //     axios.post(baseUrl + `/api/studies/${sNo}`, {
        //         s_no: slist.s_no,
        //         scrapYN: scrap
        //     }).then(function(response) {
        //         if(response.data){
        //             console.log('스터디 신청 완료');
        //           }
        //           else{
        //             alert('신청 실패');
        //           }
        //     });
        // } catch (e) {
        //     console.log(e);
        // }
    };
    //스크랩 신청
    const postScrap = async (stdNo) => {
        try {
            const response = await axios.post(baseUrl+ `/api/studies/${stdNo}/scrap/save`, {
                stdNo : stdNo
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
    }
        // axios.post(baseUrl+"/studies/scrap", {
        //   s_no: s_no,
        //   scrapYN: scrap
        // }).then(function (response) {
          
        // }).catch(function(error) {
        //   console.log(error);
        //   alert('실패');
        // });
    };
     //스크랩 취소
     const deleteScrap = async (stdNo) => {
        try {
            const response = await axios.post(baseUrl+ `/api/studies/${stdNo}/scrap/delete`, {
                stdNo : stdNo
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div>
            <Background />
            <div className={styles.box}>
                <div className={styles.boxtop}>
                    {console.log(slist.title)}
                    <div className={styles.boxtitle}>{slist.title}</div>
                    {getScrap(slist.scrapYN, slist.s_no)} 
                    <img className={styles.close} src={closeicon} onClick={onClickClose}/>
                </div>
                <div className={styles.people}>
                    <img src={peopleicon} className={styles.peopleicon} />
                    {slist.current_people} / {slist.total_people}
                </div>
                <div className={styles.boxtag}>
                    {slist.tag}
                    {/* <div className={styles.tag}>#한글</div>
                    <div className={styles.tag}>#다문화</div>
                    <div className={styles.tag}>#문법</div> */}
                </div>
                <hr />
                <div className={styles.boxdetail}>
                    {slist.contents} <br /><br />
                    스터디기간 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {slist.s_period}개월<br/>
                    모집마감기한 &nbsp;&nbsp;&nbsp;&nbsp; {slist.r_end_date}
                </div>
                <hr />
                <button className={styles.btn_apply} onClick={()=>onClickApply(slist.s_no)}>신청하기</button>   
            </div>
        </div>
    );
}

export default StudyDetail;