import Navbar from "../home/Navbar";
import styles from "./MyScrap.module.css";
import myimg from "../../images/myimg.png";
import {NavLink} from "react-router-dom";

function MyScrap() {
    const activeStyle={
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle={
        color: 'black',
        textDecoration: "none"
    };

    return(
        <div className={styles.wrap}>
            <div className={styles.head}>MY PAGE</div>
            <ul className={styles.nav}>
                <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
                <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
                <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
                <li><NavLink to="/MyScrap" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
            </ul>
            <div className={styles.body}>
            <h2 className={styles.top}>스크랩 내역</h2>
            
            </div>
        </div>
    );
}

export default MyScrap;