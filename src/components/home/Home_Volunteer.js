import React from 'react';
import styles from "./Home_Volunteer.module.css";
import mic from "../../images/mic.png"
import text from "../../images/text.png"
import youtube from "../../images/youtube.png";

let vex = [[mic, "책 녹음하기"], [text, "자료 번역"], [youtube, "강의자막"]];

function Home_Volunteer() {
    return(
        <div style={styles.vwrap}>
            <div className={styles.vbox}>
                <div className={styles.vtitle}>함께하는 자원봉사</div>
                <button className={styles.vbtn}>view detail</button>
                <div className={styles.vexbox}>
                    {vex.map((item)=>
                    (
                        <div className={styles.vex} key={item}>
                            <img src={item[0]}/>
                            <h3>{item[1]}</h3>
                            <p>ddddddddddd</p>
                            <button >신청하러 가기</button>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}
  
export default Home_Volunteer;
