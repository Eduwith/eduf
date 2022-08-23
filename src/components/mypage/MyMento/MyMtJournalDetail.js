import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import styled from "styled-components";
import styles from "./MyMtJournalDetail.module.css";
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


function MyMtJournalDetail({ toggleSPopup, current }) {

  const idx = current - 1;
  const { mentoring_no, title, date, content } = current;

  const url = 'http://localhost:8080';

  const [mtitle, setmTitle] = useState(title);
  const [mcontent, setmContent] = useState(content);

  const onTitleHandler = (e) => {
    setmTitle(e.target.value);
    console.log(mtitle);
  }

  const onContentHandler = (e) => {
    setmContent(e.target.value);
    console.log(mcontent);
  }

  // 수정

  const onPatchClick = () => {
    try {
      axios.patch(`${url}/mentoring/log/${mentoring_no}`, {
        title: mtitle,
        content: mcontent
      }).then(function (response) {
        if (response.data.result === "SUCCESS") {
          alert('일지 수정이 완료되었습니다.');
          toggleSPopup(false);
        }
        else
          alert('일지 수정에 실패하였습니다.');
      });
    }
    catch (err) {
      console.log('mentoring journal err : ', err);
    }
  }

  const onDeleteClick = () => {
    try {
      axios.delete(`${url}/mentoring/log/${mentoring_no}`)
        .then(function (response) {
          if (response.data.result === "SUCCESS") {
            alert('일지가 삭제되었습니다.');
            toggleSPopup(false);
          }
          else
            alert('일지 삭제에 실패하였습니다.');
        });
    }
    catch (err) {
      console.log('mentoring journal err : ', err);
    }
  }


  return (
    <div >
      <Background onClick={toggleSPopup} />
      <Box>

        <div className={styles.bigBox}>
          <div className={styles.bin}>
            <span className={styles.title}>멘토링 일지 작성</span>
            <span className={styles.title2}>{date}</span>
            <ImCross size="20" className={styles.x} onClick={toggleSPopup} />
          </div>
          <div className={styles.innerBox}>
            <div className={styles.line}>
              <span className={styles.subtitle}>제목</span><input type="text" placeholder={title} value={mtitle} onChange={onTitleHandler} className={styles.titleBox}></input>
            </div>
            <div className={styles.line}>
              <span className={styles.subtitle}>내용</span><input type="text" placeholder={content} value={mcontent} onChange={onContentHandler} className={styles.contentBox}></input>
            </div>

          </div>

          <button className={styles.btn} onClick={onPatchClick}>수정하기</button>
          <button className={styles.btn2} onClick={onDeleteClick}>삭제하기</button>
        </div>

      </Box>
    </div>
  )
}

export default MyMtJournalDetail;