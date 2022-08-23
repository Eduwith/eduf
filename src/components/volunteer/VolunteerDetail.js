import Navbar from "../home/Navbar";
import s from "./VolunteerDetail.module.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";


function VolunteerDetail() {
    const location = useLocation();
    const vlist = location.state.data;
    //const { idex } = useParams();
    const navigate = useNavigate();
    console.log(vlist)
    return(
        <div>
            <div className={s.content}>
                <div className={s.titleblock}>
                    <div className={s.recruitstate}>모집중</div>
                    <div className={s.title}>{vlist.title}</div>
                </div>
                <div className={s.table}>
                    <Table>
                            <tbody className="align-middle" height={500}>

                                        <tr height="10%">
                                            <td id={s.tbmenu} >봉사기간</td>
                                            <td colSpan={3}>{vlist.v_start_date}~{vlist.v_end_date}</td>
                                        </tr>
                                        <tr height="10%">
                                            <td id={s.tbmenu} >모집기간</td>
                                            <td colSpan={3}>{vlist.r_start_date}~{vlist.r_end_date}</td>
                                        </tr>
                                        <tr height="10%">
                                            <td id={s.tbmenu} >신청인원</td>
                                            <td>{vlist.current_people}/{vlist.total_people}</td>
                                            <td id={s.tbmenu} >지역</td>
                                            <td>{vlist.address}</td>
                                        </tr>                   
                                        <tr height="40%">
                                            <td id={s.tbmenu} >활동내용</td>
                                            <td colSpan={3}>{vlist.contents}</td>
                                        </tr>
                                    </tbody>
                        </Table>
                 </div>
                 <div className={s.buttonblock}>
                    <a href="https://www.1365.go.kr/" target="_blank" rel="noopener noreferrer">
                        <button className={s.btn_apply} >신청하기</button>
                    </a>
                    <button className={s.btn_back} onClick={ () => navigate(-1)}>목록보기</button>
                </div>
            </div>
        </div>
    );
}

export default VolunteerDetail;

// return(
//     <div>
//         <Navbar/>
//         <div className={s.content}>
//             <div className={s.titleblock}>
//                 <div className={s.recruitstate}>모집중</div>
//                 <div className={s.title}>{props.vlist[idex].title}</div>
//             </div>
//             <div className={s.table}>
//                 <Table>
//                         <tbody className="align-middle" height={500}>
//                                     <tr height="10%">
//                                         <td id={s.tbmenu} >봉사기간</td>
//                                         <td colSpan={3}>{props.vlist[idex].v_start_date}~{props.vlist[idex].v_end_date}</td>
//                                     </tr>
//                                     <tr height="10%">
//                                         <td id={s.tbmenu} >모집기간</td>
//                                         <td colSpan={3}>{props.vlist[idex].r_start_date}~{props.vlist[idex].r_end_date}</td>
//                                     </tr>
//                                     <tr height="10%">
//                                         <td id={s.tbmenu} >신청인원</td>
//                                         <td>{props.vlist[idex].current_people}/{props.vlist[idex].total_people}</td>
//                                         <td id={s.tbmenu} >지역</td>
//                                         <td>{props.vlist[idex].address}</td>
//                                     </tr>                   
//                                     <tr height="40%">
//                                         <td id={s.tbmenu} >활동내용</td>
//                                         <td colSpan={3}>{props.vlist[idex].contents}</td>
//                                     </tr>
//                                 </tbody>
//                     </Table>
//              </div>
//              <div className={s.buttonblock}>
//                 <button className={s.btn_apply} >신청하기</button>
//                 <button className={s.btn_back} onClick={ () => navigate(-1)}>목록보기</button>
//             </div>
//         </div>
//     </div>
// );