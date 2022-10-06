import Navbar from "../home/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyScrap.module.css";
import scrappedicon from "../../images/scrapped.png";
import slists from "../../data_study.js";
import MyNavbar from "./MyNavbar";

function MyScrap() {

    const onMentoScrap = () => {
        getScrapMlist();
    }
    const onStudyScrap = () => {
        getScrapSlist();
    }
    const onVolunteerScrap = () => {
        getScrapVlist();
    }

    const unScrap = (no) => {
        if (window.confirm("스크랩을 취소하시겠습니까?")) {
            deleteScrap(no);
        } else {
        }
    }
    //스크랩 상세보기
    const onScrapDetail = (no) => {
        
    }
    

    //스크랩 리스트 조회
    const [scraplist, setScraplist] = useState(slists);
    const baseUrl =  "http://localhost:8080";
    // const [scraplist, setScraplist] = useState([]);
    const getScrapMlist = async () => {
        try {
            const response = await axios.get(baseUrl+ "/user/scrap/mentoring");
            setScraplist(response.data); 
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getScrapMlist();
    }, []);
    
    const getScrapSlist = async () => {
        try {
            const response = await axios.get(baseUrl+ "/user/scrap/mentoring");
            setScraplist(response.data); 
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getScrapVlist = async () => {
        try {
            const response = await axios.get(baseUrl+ "/user/scrap/mentoring");
            setScraplist(response.data); 
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    //스크랩 취소
    const deleteScrap = async (no) => {
        try {
            const response = await axios.delete(baseUrl + `/user/scrap/mentoring/${no}`);
            console.log(response.data);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div className={styles.wrap}>
            <MyNavbar/>
            <div className={styles.body}>
                <h2 className={styles.top}>스크랩 내역</h2>
                <div className={styles.categbox}>
                    <button className={styles.categ} style={{backgroundColor : "#F1F5FA"}} onClick={onMentoScrap}>멘토링</button>
                    <button className={styles.categ} onClick={onStudyScrap}>스터디</button>
                    <button className={styles.categ} onClick={onVolunteerScrap}>자원봉사</button>
                </div>
                <div className={styles.line}></div>
                {scraplist.map((item, idex) =>
                    (
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxdetail}>
                                <img src={scrappedicon} className={styles.scrap} onClick={()=>unScrap(item.no)}/>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.btndetail} onClick={()=>onScrapDetail(item.no)}>상세보기 {">"}</div>
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