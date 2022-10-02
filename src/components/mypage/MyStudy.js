import Navbar from "../home/Navbar";
import styles from "./MyStudy.module.css";
import myimg from "../../images/myimg.png";
import peopleicon from "../../images/people.png";
import { React, useEffect, useState } from "react";
import axios from "axios";
import slists from "../../data_study.js";
import MyNavbar from "./MyNavbar";


function MyStudy() {
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

    const [studylist, setStudylist] = useState(slists);
    // const [studylist, setStudylist] = useState([]);
    // const baseUrl =  "http://localhost:8080";
    // const getStudylist = async () => {
    //     try {
    //         const response = await axios.get(baseUrl+ "/api/volunteers");
    //         setStudylist(response.data); 
    //         console.log(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getStudylist();
    // }, []);

    return (
        <div className={styles.wrap}>
            <MyNavbar/>
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
                            {/* <div className={styles.boxtag}>
                                <div className={styles.tag}>#한글</div>
                                <div className={styles.tag}>#다문화</div>
                                <div className={styles.tag}>#문법</div>
                            </div> */}
                            <div className={styles.boxtag}>
                                {
                                    slist[0].tag.map((tag, idex) => (
                                        <div className={styles.tag} key={tag}>#{tag}</div>
                                    ))
                                }</div>
                        </div>
                        <button className={styles.btn_edit} >수정하기</button>
                    </div>

                    {studylist.map((item, idex) =>
                    (
                        <div className={styles.boxlist} key={idex}>
                            <div className={styles.toplist}>
                                {slist[1].name}님이 스터디를 신청하였습니다.
                                <div className={styles.detail}>상세보기 {">"}</div>
                                <button className={styles.acceptbtn}>수락</button>
                                <button className={styles.refusebtn}>거절</button>
                            </div>
                            <div className={styles.listline}></div>
                        </div>
                    ))}

                </div>

                <div className={styles.bottom}>
                    <div>스터디 내역</div>
                    <div className={styles.line}></div>
                    {studylist.map((item, idex) =>
                    (
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxdetail}>
                                <div className={styles.listtitle}>{item.title}</div>
                                <div className={styles.btndetail}>상세보기 {">"}</div>
                            </div>
                            <div className={styles.listline}></div>
                        </div>
                    ))}
                    {/* <div className={styles.bottombox}>
                        <div className={styles.title}>{slist[0].title}</div>
                        <button className={styles.btn_detail} >상세보기</button>
                    </div> */}

                </div>

            </div>

        </div>
    );
}

export default MyStudy;