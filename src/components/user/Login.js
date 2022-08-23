import React, { useState } from 'react';
import styles from "./Login.module.css"
import { MdClose } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../../recoil/User';
import { IdState } from '../../recoil/RecoilId';
import { tokenState } from '../../recoil/GlobalToken';


const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useRecoilState(nicknameState);
  const [userID, setUserId] = useRecoilState(IdState);
  const { open, close } = props;
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [tokenData, setTokenData] = useRecoilState(tokenState);

  const onEmailHandler = (event) => { // id 저장
    console.log(event.currentTarget.value)
    setEmail(event.currentTarget.value)
  }

  const onPwHandler = (event) => { // pw 저장
    console.log(event.currentTarget.value)
    setPw(event.currentTarget.value)
  }

  const url = 'http://localhost:8080';
  //const url = 'http://34.64.249.190:8080';

  const login = (e) => {
    e.preventDefault();
    try {
      axios.post(url + '/user/login', {
        email: email,
        pwd: pw
      })
        .then((res) => {
          if(res.data){
            const token = res.data.accessToken;
            localStorage.setItem('jwtToken', token);
            setTokenData(localStorage.getItem('jwtToken'));
            setAuthorizationToken(token);
            setUsername(res.data.name);
            setUserId(res.data.email);
            props.close(); 
            navigate('/main');
          }
          else {
            alert('로그인 실패: ID 또는 PW를 잘못 입력하셨습니다.');
          }
        });
    } catch (err) {
      console.log('login err', err)

    }

  }

  return (
    <div>
      {open ? (
        <div>
          <div className={styles.back} ></div>
          <form className={styles.loginbox} onSubmit={login}>
            <div className={styles.logo}>eduwith</div>
            <div className={styles.text}>로그인</div>
            <MdClose size={50} color="#5D6466" className={styles.icon} onClick={close} />
            <input
              className={styles.id}
              type="text" placeholder='이메일 주소'
              value={email}
              onChange={onEmailHandler}
            />
            <input
              className={styles.pw}
              type="password" placeholder="비밀번호"
              value={pw}
              onChange={onPwHandler}
            />
            <div className={styles.findpw}>비밀번호를 잊어버리셨나요?</div>
            <div className={styles.sign}><Link to="/join">회원가입</Link></div>
            <button className={styles.lbtn} type="submit">
              LOGIN
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Login;