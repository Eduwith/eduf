import React from "react";
import styles from "./Notice.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {MdDelete ,MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import notices from "../../data_study.js";


function Notice() {
    const navigate = useNavigate();
    
    const Noticebox= styled.div`
    background : ${props => 
        {if(props.read == "Y") { return "#C4C4C4"}
    }}
    ;
    `;

    const onClickNotice = (field, notice_no) => {
        patchNotice(notice_no);
        if(field == "Mentoring"){
            navigate("/mymentoapply");
        }
        else if(field == "Study"){
            navigate("/mystudy");
        }
        else if(field == "Volunteer"){
            navigate("/volunteers");
        }
    };

    const onRemove = (notice_no) => {
        deleteNotice(notice_no);
        getNotice();
    };

    const baseUrl = "http://localhost:8080";
    const [notice, setNotice] = useState(notices);
    //알림 조회
    //const [notice, setNotice] = useState([]);
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

    //알림 삭제
    const deleteNotice = async (notice_no) => {
        try {
            const response = await axios.delete(baseUrl + `/notice/${notice_no}`);
            console.log(response.data);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    //알림 확인
    const patchNotice = async (notice_no) => {
        try {
            const response = await axios.patch(baseUrl + `/notice/${notice_no}`, {
                read: "Y"
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div className={styles.wrap}>
                <div className={styles.nbody}>
                    <div>알림</div>
                    <div className={styles.line}></div>
                    <div className={styles.nday}>
                        {notice.map((note) =>
                        (
                            <div className={styles.notes} key={note.notice_no}>
                                <div>{note.date}</div>
                                <Noticebox read={note.read} className={styles.nbox}>
                                    <div className={styles.ntext} onClick={()=> onClickNotice(note.field, note.notice_no)}>{note.title}</div>
                                    <div className={styles.btn_delete} onClick={()=> onRemove(note.notice_no)}><MdDelete color="#4673EA" size={45}/></div>
                                </Noticebox>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.nbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div>
        </div>
    );
}

export default Notice;