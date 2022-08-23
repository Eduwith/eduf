import React from 'react';
import styles from "./Home_Study.module.css";

let studylist = [["우리말 문법 스터디", "0/5명", "#한글", "안녕하세요. 스터디 모집글 내용..", "모집마감기한", "2023.07.12"],["우리말 문법 스터디", "0/5명", "#한글", "안녕하세요. 스터디 모집글 내용..", "모집마감기한", "2023.07.12"], ["우리말 문법 스터디", "0/5명", "#한글", "안녕하세요. 스터디 모집글 내용..", "모집마감기한", "2023.07.12"]];

function HomeStudy() {
    return (
        <div style={styles.swrap}>
            <div className={styles.top}>
                <div className={styles.title}>나에게 맞는 스터디</div>
            </div>
            <div className={styles.middle}>
                <button className={styles.btndetail}>자세히 보기 {">"}</button>
                <div className={styles.studylist}>
                    {studylist.map((item, idex) =>
                    (
                        <div className={styles.studybox} key={idex}>
                            <div className={styles.stitle}>{item[0]}</div>
                            <div className={styles.speople}>{item[1]}</div>
                            <button className={styles.stag}>{item[2]}</button> <hr/>
                            <div className={styles.sintro}> {item[3]}</div>
                            <div className={styles.srecruitperiod}>{item[4]} {item[5]}</div><hr/>
                            <button className={styles.sbtn}>상세보기</button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default HomeStudy;