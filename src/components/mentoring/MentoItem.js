import React from "react";
import pin from "../../images/animal.png";
import styles from "./MentoItem.module.css"

function MentoItem({item, onView, togglePopup}) {

  const {m_no, title, name, field, info, star} = item;

  return (
    <div className={styles.mento} onMouseOver = {() => onView(m_no)}>
        <img className={styles.pic} src={pin} alt="mentopic" />
        <div className={styles.back}>
          <div className={styles.title}>{title}</div>
          <div className={styles.box}><span>평점</span> <div>{star}</div></div>
          <div className={styles.btn} onClick={togglePopup}>신청</div>
          <div className={styles.box}><span>이름</span> <div>{name}</div></div>
          <div className={styles.box}><span>분야</span> <div>{field}</div></div>
          <div className={styles.box2}><span>소개</span> <div className={styles.desc_box}>{info}</div></div>
        </div>
      </div>
  )
}

export default MentoItem;