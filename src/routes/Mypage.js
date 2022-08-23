import styles from "./Mypage.module.css";
import myimg from "../images/myimg.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
//import userdata from "../data_user.js";

function MyPage() {
    const userdata = {
        
            email: "test@gmail.com",
            name: "성수정",
            pwd : "123456",
            age : "23",
            gender : "F",      
            address : "성신여자대학교",
            profile_img : ""
        
    }
    const navigate = useNavigate();

    const [user, setuser] = useState(userdata);
    const baseurl = "http://localhost:8080";
    // const [user, setUser] = useState([]);
    // const [error, setError] = useState(null);
    // const apiMypage = "http://localhost:8080/user/mypage";
    // const getUser = async () => {
    //     try {
    //         const response = await axios.get(baseurl+ "/user/mypage");
    //         setUser(response.data);
    //     } catch (e) {
    //         setError(e);
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     getUser();
    // }, []);

    const editUser = async () => {
        console.log("수정 버튼 클릭됨");
        axios.post(baseurl + "/user/edit",
        {
            headers:{
              'Content-type': 'application/json',
              //'Authorization' : `Bearer ${localStorage.getItem(jwtToken)}`
            }
        }
        ).then(function (response) {
            if (response.data.result == "SUCCESS") {
                console.log('수정완료');
                if (window.confirm("프로필 수정을 위해 다시 로그인해주세요")) {
                    localStorage.removeItem("user");
                    navigate("/login");
                } else {
                    alert("프로필 수정을 취소하였습니다.")
                }
            } else {
                alert(response.data.result)
            }

        }).catch(function (error) {
            console.log(error);
        });
    };

    const quitUser = async () => {
        console.log("탈퇴 버튼 클릭됨");
        axios.post(baseurl + "/user/quit", {
            
        }).then(function (response) {
            alert("탈퇴되었습니다.");
            navigate("/main");
        }).catch(function (error) {
            console.log(error);
        });
    };

    const onEdit = () => {
        editUser();
    }

    const onQuit = () => {
        quitUser();
    }
    
    const activeStyle={
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle={
        color: 'black',
        textDecoration: "none"
    };

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [changePassword, setChangePassword] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onChangePasswordHandler = (event) => {
        setChangePassword(event.currentTarget.value)
    }
    const onAgeHandler = (event) => {
        setAge(event.currentTarget.value)
    }
    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value)
    }

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
                <div className={styles.left}>
                        <h2 className={styles.name}>{user.name}</h2>
                        <div className={styles.tbmenu} >이메일</div>
                        <div className={styles.tbmenu} >비밀번호</div>
                        <div className={styles.tbmenu} >비밀번호 변경</div>
                        <div className={styles.tbmenu} >이름</div>
                        <div className={styles.tbmenu} >나이</div>
                        <div className={styles.tbmenu} >성별</div>
                        <div className={styles.tbmenu} >주소</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <img src={myimg} alt="myimg" className={styles.myimg}/>
                        <button className={styles.quitbtn} onClick={onQuit}>탈퇴하기</button>
                    </div>
                    <div className={styles.text} >{user.email}</div>
                    <div><input name="password" type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={onPasswordHandler} className={styles.input}/></div>
                    <div><input name="changePassword" type="password" placeholder="변경할 비밀번호를 입력하세요" value={changePassword} onChange={onChangePasswordHandler} className={styles.input}/></div>
                    <div><input name="name" type="text" placeholder={user.name} value={name} onChange={onNameHandler} className={styles.input}/></div>
                    <div><input name="age" type="number" placeholder={user.age} value={age} onChange={onAgeHandler}className={styles.input} /></div>
                    <div className={styles.text}>{user.gender}</div>
                    <div><input name="address" type="text" placeholder={user.address} value={address} onChange={onAddressHandler} className={styles.input} /></div>
                </div>
            </div>
            <div className={styles.btnbox}>
                <button className={styles.editbtn} onClick={onEdit}>수정하기</button>
            </div>
                
        </div>
    );
}

export default MyPage;