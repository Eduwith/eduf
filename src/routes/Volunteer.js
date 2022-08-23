import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./Volunteer.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import vlists from "../data.js";
import Paging from "../components/volunteer/Paging";
import vimg from "../images/vimage.png";
import peopleicon from "../images/people.png";


function Volunteer() {
    const Vbutton= styled.div`
        background : ${props => 
            {if(props.recruit == "N") { return "#5D6466"}
        } }
    `;
    // const [page, setPage] = useState(1); // 현재 페이지
    // const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    // const [postPerPage] = useState(7); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage; //해당 페이지의 첫번째 데이터 인덱스
    // const indexOfFirstPost = indexOfLastPost - postPerPage; //해당 페이지의 마지막 데이터 인덱스
    // const handlePageChange = (page) => { 
    //     setPage(page); 
    //     console.log(page); 
    // }

    // useEffect(() => {
    //     setCurrentPosts(vlist.slice(indexOfFirstPost, indexOfLastPost));
    // }, [indexOfFirstPost, indexOfLastPost, page]);

    // const onClickTwo = () =>{
    //     setPage(2);
    // }
    // const onClickone= () =>{
    //     setPage(1);
    // }

    const [vlist, setVlist] = useState(vlists);
    
    // const [vlist, setVlist] = useState([]);
    // const apiVolunteer = "http://localhost:8080/api/volunteers";
    // const baseUrl =  "http://localhost:8080";
    // const getVlist = async () => {
    //     try {
    //         const response = await axios.get(baseUrl+ "/api/volunteers",
    //             {params : { page: "0"}
    //         });
    //         setVlist(response.data); // 데이터는 response.data 안에
    //         // const response = await axios.get(apiVolunteer +`?page=${page}&pageSize=10`);
    //         //setPage(response.data.params);
    //         console.log(response.data.params);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getVlist();
    // }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.vhead}>
                <div>
                    <div className={styles.vtitle}>Volunteer</div>
                    <div className={styles.vtext}>1년 365일 자원봉사하기 좋은 날</div>
                    <img className={styles.vimg} src={vimg}></img>
                </div>
            </div>
            
            <div className={styles.vlist}>
                <div>
                    <div className={styles.text}>목록보기 <hr /> </div>
    
                    {vlist.map((item, idex) =>
                    (
                                <Link to={`/volunteers/no=${item.v_no}`} state={{ data: item }} style={{ textDecoration: "none", color: "#333333" }}> 
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxleft}>
                                    <Vbutton recruit={item.recruitYN} className={styles.recruitbtn}>모집중</Vbutton>
                                
                                <div><img src={peopleicon}/> {item.current_people}/{item.total_people}</div>
                            </div>
                            <div className={styles.boxdetail}>
                                <h4>{item.title}</h4>
                                <div className={styles.boxaddress}>[지역] {item.address} </div>
                                [봉사기간] {item.v_start_date} ~ {item.v_end_date} &nbsp; [모집기간] {item.r_start_date} ~ {item.r_end_date}
                            </div>
                            {console.log(idex)}
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* <div onClick={onClickone}>1</div>
            <div onClick={onClickTwo}>2</div> */}
            {/* <Paging className={styles.vbottom} page={page} totalCount={vlist.length} postPerPage={postPerPage}
                    pageRangeDisplayed={5} handlePageChange={handlePageChange}/> */}

            {/* <div className={styles.vbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div> */}
        </div>
        
    );
}

export default Volunteer;