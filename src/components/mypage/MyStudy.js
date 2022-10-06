import Navbar from "../home/Navbar";
import styles from "./MyStudy.module.css";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import peopleicon from "../../images/people.png";
import left from "../../images/leftarrow.png";
import right from "../../images/rightarrow.png";
import slists from "../../data_study.js";
import MyNavbar from "./MyNavbar";


function MyStudy() {

    //이전버튼
    let mySrecruitNo = 0;
    const onBack = (srecruit_no) => {
        mySrecruitNo = srecruit_no - 1;
        if(mySrecruitNo < 0){
            mySrecruitNo = 0;
        }
        console.log(mySrecruitNo);
    };
    const onNext = (srecruit_no) => {
        mySrecruitNo = srecruit_no + 1;
        console.log(mySrecruitNo);
    };
    //스터디 상세페이지로 이동
    const onStudyDetail = (s_no) => {
        <Link to={`/studies/${s_no}`} state={{ data: item}} style={{ textDecoration: "none", color: "#333333" }}></Link>
        console.log(mySrecruitNo);
    };

    //모집한 스터디 리스트
    const [srecruit, setSrecruit] = useState(slists);
    // const [srecruit, setSrecruit] = useState([]);
    const baseUrl = "http://localhost:8080";
    const getSrecruit = async () => {
        try {
            const response = await axios.get(baseUrl +"/");
            setSrecruit(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getSrecruit();
    }, []);

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
                    <div className={styles.topcontent}>
                        <img src={left} className={styles.nextbtn} onClick={()=> onBack(mySrecruitNo)} />
                        <div className={styles.topbox}>
                            <div className={styles.topboxleft}>
                                <div className={styles.title}>{srecruit[mySrecruitNo].title}</div>
                                <div>
                                    <img src={peopleicon} className={styles.peopleicon} />
                                    {srecruit[mySrecruitNo].current_people} / {srecruit[mySrecruitNo].total_people}
                                </div>
                                <div>모집마감기한 {srecruit[mySrecruitNo].r_end_date}</div>
                                {/* <div className={styles.boxtag}>
                                <div className={styles.tag}>#한글</div>
                                <div className={styles.tag}>#다문화</div>
                                <div className={styles.tag}>#문법</div>
                            </div> */}
                                <div className={styles.boxtag}>
                                    {
                                        srecruit[mySrecruitNo].tag.map((tag, idex) => (
                                            <div className={styles.tag} key={tag}>#{tag}</div>
                                        ))
                                    }</div>
                            </div>
                            <button className={styles.btn_edit} >수정하기</button>
                        </div>
                        <img src={right} className={styles.nextbtn} onClick={()=> onNext(mySrecruitNo)}/>
                    </div>

                    {studylist.map((item, idex) =>
                    (
                        <div className={styles.boxlist} key={idex}>
                            <div className={styles.toplist}>
                                {srecruit[mySrecruitNo].name}님이 스터디를 신청하였습니다.
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
                                <div className={styles.btndetail} onClick={()=>onStudyDetail(item.s_no)}>상세보기 {">"}</div>
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