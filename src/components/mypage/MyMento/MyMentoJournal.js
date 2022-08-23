import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import styled from "styled-components";
import styles from "./MyMentoJournal.module.css";
import axios from "axios";

const Background = styled.div`
  position: fixed;
  z-index: 980;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height:100vh;
  background: grey;
  opacity: 0.9;
`;

const Box = styled.div`
  position: fixed;
  top: 13%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 990;
  width: 61vw;
  height: 71vh;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0px #4673EA;
  background: white;
`;


function MyMentoJournal({ togglePopup }) {

  //const idx = current - 1;

  //const {log_no, title, date, content } =logList[Object.keys(logList)[idx]];
  //const url = 'http://34.64.249.190:8080';

  const url = 'http://localhost:8080';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const onClick = () => {
    
    //등록
    try {
      axios.post(url + '/mentoring/log/apply', {
        title: title,
        content: content
      }).then(function (response) {
        if(response){
          alert('일지 등록이 완료되었습니다.');
          togglePopup(false);
        }
        else
          alert('일지 등록에 실패하였습니다.');
      });
    }
    catch(err) {
      console.log('mentoring journal err : ', err);
    }
  }

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  }

  const onContentHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  }


  return (
    <div >
      <Background onClick={togglePopup} />
       <Box>
            
            <div className={styles.bigBox}>
            <div className={styles.bin}>
                <span className={styles.title}>멘토링 일지 작성</span>           
                <ImCross size="20" className={styles.x} onClick={togglePopup} />
              </div>
              <div className={styles.innerBox}>
                <div className={styles.line}>
                  <span className={styles.subtitle}>제목</span><input type="text" value={title} onChange={onTitleHandler} className={styles.titleBox}></input>
                </div>
                <div className={styles.line}>
                  <span className={styles.subtitle}>내용</span><input type="text" value={content} onChange= {onContentHandler} className={styles.contentBox}></input>
                </div>
                 
              </div>
             
              <button className={styles.btn} onClick={onClick}>등록하기</button>
            </div>
           
      </Box> 
    </div>
  )
}

export default MyMentoJournal;