import React from "react";
import styles from "./Notice.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {MdDelete ,MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";

let ndata = [["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."],["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."], ["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."], ["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."],["2022/02/24", "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요."]];

function Notice() {
    const baseUrl = "http://localhost:8080";
    //const [slist, setSlist] = useState(slists);
    const [notice, setNotice] = useState([]);
    const getNotice = async () => {
        try {
            const response = await axios.get(baseUrl+"/notice");
            setNotice(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getNotice();
    }, []);

    return(
        <div className={styles.wrap}>
                <div className={styles.nbody}>
                    <div>알림</div>
                    <div className={styles.line}></div>
                    <div className={styles.nday}>
                        {ndata.map((note) =>
                        (
                            <div classname={styles.notes} key={note}>
                                <div>{note[0]}</div>
                                <div className={styles.nbox}>
                                    <div className={styles.ntext}>{note[1]}</div>
                                    <div className={styles.btn_delete}><MdDelete color="#4673EA" size={50}/></div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.nbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div>
        </div>
    );
}

export default Notice;