import React from "react";
import styles from "./Study.module.css";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import slists from "../data_study.js";
import scrapicon from "../images/scrap.png";
import scrappedicon from "../images/scrapped.png";
import peopleicon from "../images/people.png";
import searchicon from "../images/search.png";
import StudyDetail from "../components/study/StudyDetail";
import Paging from "../components/volunteer/Paging";

function Study(){
    const Sbox= styled.div`
    background : ${props => 
        {if(props.recruit == "N") { return "#C4C4C4"}
    }}
    ;
    border: ${props => 
        {if(props.recruit == "N") { return "none"}
    }}
    `;
    const SearchIcon = styled.img`
    &:hover{  
        background-color : #c4c4c4;
      }
    `;

    //페이징 처리
     const [page, setPage] = useState(1); // 현재 페이지
    // const onClickTwo = () =>{
    //     setPage(2);
    //     console.log("2page")
    // }
    // const onClickone= () =>{
    //     setPage(1);
    // }
    // const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    // const [postPerPage] = useState(7); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const handlePageChange = (page) => {setPage(page);}
    // useEffect(()=>{
    //     setCurrentPosts(slist.slice(indexOfFirstPost, indexOfLastPost));
    // }, [indexOfFirstPost, indexOfLastPost, page]);

    //토클
    const [studyDetailPopup, setStudyDetailPopup] = useState(false);
    const toggleStudyDetailPopup = (s_no) => {
        setStudyDetailPopup(current => !current);
    };

    //스크랩
    const [scrap, setScrap] = useState(false);
    const getScrap = (scrapYn, s_no) => {
        if (scrapYn == "Y")
        return <img src={scrapicon} className={styles.scrap} onClick={()=>onClickScrap(s_no)} />
        if (scrapYn == "N") return <img src={scrappedicon} className={styles.scrap} onClick={()=>onClickScrap(s_no)} />
    }
    const onClickScrap = (stdNo) => {
        postScrap(stdNo)
    }
    // const getScrap = (scrapYn, s_no) => {
    //     if (scrapYn == "Y")
    //     return setScrap(current => !current); (<img src={scrapicon} className={styles.scrap} onClick={()=>onClickScrap(s_no)} />);
    //     if (scrapYn == "N") return <img src={scrappedicon} className={styles.scrap} onClick={()=>onClickScrap(s_no)} />
    // }
    // const onClickScrap = (stdNo) => {
    //     scrap ? <img src={scrappedicon} className={styles.scrap} onClick={()=>onClickScrap(stdNo)} /> : <img src={scrapicon} className={styles.scrap} onClick={()=>onClickScrap(stdNo)} />
    //     postScrap(stdNo);
    // }
    //검색창
    const [searchTag, setSearchTag] = useState("");
    const handleSearchInput = (e) => {
        setSearchTag(e.target.value);
    }

    const baseUrl =  "http://localhost:8080";
    //const [slist, setSlist] = useState(slists);
    const [slist, setSlist] = useState([]);
    const getSlist = async () => {
        try {
            const response = await axios.get(baseUrl+ `/api/studies?page=0`);
            setSlist(response.data.content); // 데이터는 response.data 안에
            console.log(response.data);
            console.log(response.data.content);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getSlist();
    }, []);

    const onSearch = async () => {
        try {
            console.log(searchTag + "검색");
            const response = await axios.get(baseUrl + `/studies/search?keyword=${searchTag}`, {
                keyword : searchTag
            });
            setSlist(response.data);
            console.log(response.data);
        } catch (er) {
            console.log("search Error >>", er);
        }
    };

    //스크랩 신청
    const postScrap = async (stdNo) => {
        try {
            const response = await axios.post(baseUrl+ `/api/studies/${stdNo}/scrap/save`);
            console.log(response.data);
        } catch (e) {
            console.log(e);
    }
        // axios.post(baseUrl+"/studies/scrap", {
        //   s_no: s_no,
        //   scrapYN: scrap
        // }).then(function (response) {
          
        // }).catch(function(error) {
        //   console.log(error);
        //   alert('실패');
        // });
    };
     //스크랩 취소
     const deleteScrap = async (stdNo) => {
        try {
            const response = await axios.post(baseUrl+ `/api/studies/${stdNo}/scrap/delete`);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div className={styles.wrap}>
            <div className={styles.shead}>
                <div className={styles.stitle}>스터디</div>
                <Link to="/studies/register">
                    <button className={styles.swritebtn}>스터디 모집하기</button>
                </Link>
            </div>
            <form className={styles.s_search}>
            <input value={searchTag} onChange={handleSearchInput} type="text" placeholder="검색어를 입력하세요" className={styles.searchInput} />
            <SearchIcon onClick={onSearch} src={searchicon} className={styles.searchImg} />
            </form>
            <div className={styles.sbody}>
                {slist.map((item, idex) =>
                (
                    <Sbox recruit={item.recruitYN} className={styles.box} key={idex}>
                        <div className={styles.boxtop}>

                            <Link to={`/studies/${item.s_no}`} state={{ data: item, scrap: scrap}} style={{ textDecoration: "none", color: "#333333" }}>
                                <div className={styles.boxtitle} onClick={toggleStudyDetailPopup}>{item.title}</div>
                            </Link>
                            {getScrap(item.scrapYN, item.s_no)}
                            
                            {/* {scrap ? <img src={scrappedicon} className={styles.scrap} onClick={()=>onClickScrap(item.s_no)} /> : <img src={scrapicon} className={styles.scrap} onClick={()=>onClickScrap(item.s_no)} />} */}
                        </div>
                        <Link to={`/studies/${item.s_no}`} state={{ data: item, scrap : scrap, }} style={{textDecoration : "none", color: "#333333"}}>
                        <div className={styles.people}>
                            <img src={peopleicon} className={styles.peopleicon} />
                            {item.current_people} / {item.total_people}
                        </div>
                        <hr /> 
                        <div className={styles.boxdetail} onClick={toggleStudyDetailPopup}>
                            {item.contents} <br /><br />
                            [모집마감기한] {item.r_end_date}
                            <hr />
                        </div>
                        <div className={styles.boxtag} onClick={toggleStudyDetailPopup}>{item.tag}</div>
                        </Link>
                        {/* {studyDetailPopup && (
                                <StudyDetail slist={item} toggleStudyDetailPopup={toggleStudyDetailPopup} scrap={scrap} onClickScrap={onClickScrap}/>
                             )}  */}
                    </Sbox>
                ))}
            
                
            </div>
            {/* <Paging className={styles.vbottom} page={page} totalCount={slist.length} postPerPage={postPerPage}
                    pageRangeDisplayed={5} handlePageChange={handlePageChange}/> */}
        </div>
    );

}

export default Study;

{/* <div className={styles.box} key={idex} onClick={toggleStudyDetailPopup}>
<Link to={`/volunteerdetail/${idex}`} state={{ data: slist[idex] }} style={{textDecoration: 'none', color: '#333333'}} >
    <div className={styles.boxtop}>
        <div className={styles.boxtitle}>{slist[idex].title}</div>
        <img className={styles.scrap} src={scrapicon}></img>
    </div>
    <div>
        <img src={peopleicon} className={styles.peopleicon}/> 
         {slist[idex].current_people} / {slist[idex].total_people} <hr/> </div>
    
    <div className={styles.boxdetail}>
        {slist[idex].contents} <br /><br />
        [모집마감기한] {slist[idex].r_end_date}
        <hr />
    </div>

    <div className={styles.boxtag}>
        <div className={styles.tag}>#한글</div>
        <div className={styles.tag}>#다문화</div>
        <div className={styles.tag}>#문법</div>
    </div>
</Link>
</div> */}

{/* <div className={styles.boxtag} onClick={toggleStudyDetailPopup}>
                            {
                                item.tag.map((tag, idex) => (
                                    <div className={styles.tag} key={tag}>#{tag}</div>
                                ))
                            }
                        </div> */}