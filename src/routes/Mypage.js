import styles from "./Mypage.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import myimg from "../images/myimg.png"
import MyNavbar from "../components/mypage/MyNavbar";

function MyPage() {
    const userdata = {
        
            email: "kim@gmail.com",
            name: "김수정",
            pwd : "123",
            age : "23",
            gender : "W",      
            address : "서울특별시성북구",
            profile_img : ""
        
    }

    const navigate = useNavigate();

    const onEditImg = () => {
        //patchUser();
        //getUser();
    };
    const onEdit = () => {
        if (window.confirm("프로필을 수정하시겠습니까? 프로필 수정을 위해 다시 로그인해주세요")) {
            localStorage.removeItem("jwtToken");
            patchUser();
            navigate("/main");
        } else {
            alert("프로필 수정을 취소하였습니다.")
        }
        //getUser();
    };
    const onQuit = () => {
        if (window.confirm("정말로 탈퇴하시겠습니까?")) {
            localStorage.removeItem("jwtToken");
            deleteUser();
        } else {
            alert("회원 탈퇴를 취소하였습니다.")
        }
    }

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

    //회원정보 조회
    const baseUrl = "http://localhost:8080";
    //const [user, setUser] = useState(userdata);

    const [user, setUser] = useState([]);
    const getUser = async () => {
        try {
            const response = await axios.get(baseUrl+ "/user/mypage");
            setUser(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    //회원정보 수정
    const patchUser = async () => {
        try {
            const response = await axios.patch(baseUrl + "/user/edit", {
                // headers:{
                //     'Content-type': 'application/json',
                //     //'Authorization' : `Bearer ${localStorage.getItem(jwtToken)}`
                // },
                name : name,
                pwd: password,
                changePwd: changePassword,
                address: address
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    //회원탈퇴
    const deleteUser = async () => {
        try {
            const response = await axios.delete(baseUrl + "/user/withdrawal");
            console.log(response.data);
            alert("탈퇴되었습니다.");
            navigate("/main");
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div className={styles.wrap}>
            <MyNavbar/>
            <div className={styles.body}>
                <div className={styles.left}>
                        <div className={styles.name}>{user.name}</div>
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
                        <button className={styles.editimgbtn} onClick={onEditImg}>사진 편집</button>
                    </div>
                    <div className={styles.text} >{user.email}</div>
                    <div><input name="password" type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={onPasswordHandler} className={styles.input}/></div>
                    <div><input name="changePassword" type="password" placeholder="변경할 비밀번호를 입력하세요" value={changePassword} onChange={onChangePasswordHandler} className={styles.input}/></div>
                    <div><input name="name" type="text" placeholder={user.name} value={name} onChange={onNameHandler} className={styles.inputtext}/></div>
                    <div><input name="age" type="number" placeholder={user.age} value={age} onChange={onAgeHandler}className={styles.inputtext} /></div>
                    <div className={styles.text}>
                        {user.gender == "M" ? "남자": "여자"}
                    </div>
                    <div><input name="address" type="text" placeholder={user.address} value={address} onChange={onAddressHandler} className={styles.inputtext} /></div>
                </div>
            </div>
            <div className={styles.btnbox}>
                <button className={styles.editbtn} onClick={onEdit}>수정하기</button>
                <button className={styles.quitbtn} onClick={onQuit}>탈퇴하기</button>
            </div>
                
        </div>
    );
}

export default MyPage;

// axios.post(baseurl + "/user/edit",
//         {
//             headers:{
//               'Content-type': 'application/json',
//               //'Authorization' : `Bearer ${localStorage.getItem(jwtToken)}`
//             }
//         }
//         ).then(function (response) {
//             if (response.data.result == "SUCCESS") {
//                 console.log('수정완료');
//                 if (window.confirm("프로필 수정을 위해 다시 로그인해주세요")) {
//                     localStorage.removeItem("user");
//                     navigate("/login");
//                 } else {
//                     alert("프로필 수정을 취소하였습니다.")
//                 }
//             } else {
//                 alert(response.data.result)
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });