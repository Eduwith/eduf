import Navbar from "../home/Navbar";
import styles from "./MyStudy.module.css";
import myimg from "../../images/myimg.png";
import peopleicon from "../../images/people.png";
import { NavLink } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import slists from "../../data_study.js";


function MyStudy() {
    const activeStyle = {
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle = {
        color: 'black',
        textDecoration: "none"
    };

    const [slist, setSlist] = useState(slists);
    // const [slist, setSlist] = useState([]);
    // const baseUrl = "http://localhost:8080";
    // const getSlist = async () => {
    //     try {
    //         setSlist(null);
    //         const response = await axios.get(baseUrl +"/");
    //         setSlist(response.data); // 데이터는 response.data 안에
    //         console.log(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getSlist();
    // }, []);
    //console.log(slistTag);
    const str = '#englist#dd#rr';
    console.log(str.split('#'));
    // const [slistTag, setSlistTag] = useState([]);
    // {slist.map((slist, idex) => ( 
    //     setSlistTag(slist.tag.split('#'))
    // ))}
    // console.log(slistTag);
    //const tag =  

    return (
        <div className={styles.wrap}>
            <div className={styles.head}>MY PAGE</div>
            <ul className={styles.nav}>
                <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
                <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
                <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
                <li><NavLink to="/MyScrap" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
            </ul>
            <div className={styles.body}>
                <div className={styles.top}>
                    <div>내가 모집한 스터디</div>
                    <div className={styles.topbox}>
                        <div className={styles.topboxleft}>
                            <div className={styles.title}>{slist[0].title}</div>
                            <div>
                                <img src={peopleicon} className={styles.peopleicon} />
                                {slist[0].current_people} / {slist[0].total_people}
                            </div>
                            <div>모집마감기한 {slist[0].r_end_date}</div>
                            <div className={styles.boxtag}>
                                <div className={styles.tag}>#한글</div>
                                <div className={styles.tag}>#다문화</div>
                                <div className={styles.tag}>#문법</div>
                            </div>
                            {/* {
                                    tag.map((tag, idex) =>(
                                        <div className={styles.tag} key={tag}>#{tag}</div>
                                    ))
                            } */}
                        </div>
                        <button className={styles.btn_edit} >수정하기</button>
                    </div>

                    <div className={styles.toplist}>
                        {slist.name}님이 스터디를 신청하였습니다.
                        <div className={styles.detail}>상세보기 {">"}</div>
                        <button className={styles.acceptbtn}>수락</button>
                        <button className={styles.refusebtn}>거절</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div>스터디 내역</div>
                    <div className={styles.line}></div>
                    <div className={styles.bottombox}>
                        <div className={styles.title}>{slist[0].title}</div>
                        <button className={styles.btn_detail} >상세보기</button>
                    </div>
                    <hr/>
                </div>

            </div>

        </div>
    );
}

export default MyStudy;