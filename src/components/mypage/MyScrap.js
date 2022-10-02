import Navbar from "../home/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyScrap.module.css";
import {NavLink} from "react-router-dom";
import scrapicon from "../../images/scrap.png";
import slists from "../../data_study.js";

function MyScrap() {
    const activeStyle={
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle={
        color: 'black',
        textDecoration: "none"
    };

    const [scraplist, setScraplist] = useState(slists);
    // const [scraplist, setScraplist] = useState([]);
    // const baseUrl =  "http://localhost:8080";
    // const getScraplist = async () => {
    //     try {
    //         const response = await axios.get(baseUrl+ "/api/volunteers");
    //         setScraplist(response.data); 
    //         console.log(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getScraplist();
    // }, []);
    
    // const getScrapSlist = async () => {
    //     try {
    //         const response = await axios.get(baseUrl+ "/api/volunteers");
    //         setScraplist(response.data); 
    //         console.log(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getScrapSlist();
    // }, []);
    // const getScrapVlist = async () => {
    //     try {
    //         const response = await axios.get(baseUrl+ "/api/volunteers");
    //         setScraplist(response.data); 
    //         console.log(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getScrapVlist();
    // }, []);

    const onClickScrapMento = () => {
        
    }
    const onClickScrapStudy = () => {
        
    }
    const onClickScrapVolunteer = () => {
        
    }

    const onScrapDetail = () => {
        
    }

    return(
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
                <h2 className={styles.top}>스크랩 내역</h2>
                <div className={styles.categbox}>
                    <button className={styles.categ} style={{backgroundColor : "#F1F5FA"}} onClick={onClickScrapMento}>멘토링</button>
                    <button className={styles.categ}>스터디</button>
                    <button className={styles.categ}>자원봉사</button>
                </div>
                <div className={styles.line}></div>
                {scraplist.map((item, idex) =>
                    (
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxdetail}>
                                <img src={scrapicon} className={styles.scrap} />
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.btndetail} onClick={onScrapDetail}>상세보기 {">"}</div>
                            </div>
                            <div className={styles.listline}></div>
                            {console.log(idex)}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MyScrap;