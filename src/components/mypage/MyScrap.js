import Navbar from "../home/Navbar";
import styles from "./MyMento/MyMento.module.css";
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
            <div className={styles.head}>마이페이지</div>
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.mybox}>
                    <div className={styles.left}>
                        <img src={myimg} alt="myimg" className={styles.myimg}/>
                        <h2 className={styles.name}>Tom </h2>
                        <ul className={styles.nav}>
                        <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                            <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
                            <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
                            <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
                            <li><NavLink to="/MyScrap"style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                            <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.mymenu}>스크랩 내역 <hr/></h2>
                        <div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MyScrap;