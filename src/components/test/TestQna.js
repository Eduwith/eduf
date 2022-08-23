import React, { useEffect, useState } from "react";
import data from "../../common/data.json"
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./TestQna.module.css"
import fox2 from "../../images/fox2.png";

function TestQna() {

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [num, setNum] = useState(searchParams.get("res")?.length ?? 0);
  const [mbti, setMbti] = useState([]);

  useEffect(() => {
    const len = searchParams.get("res")?.length ?? 0
    setMbti(searchParams.get("res")?.split('') ?? []);
    if (len < 12)
      setNum(searchParams.get("res")?.length ?? 0);
    else {
      navigate("/result?" + searchParams.toString());
    }
  }, [searchParams])

  const nextSlide = (i) => {
    const a = [...mbti, data[num].answers[i].type]
    setMbti(a);
    searchParams.set("res", a.join(''))
    setSearchParams(searchParams)
  };

  return (
    <div className={styles.bdbox}>
    <div className={styles.qbox}>
     
     <div className={styles.bar}></div>
     
      <div className={styles.qnum}>Q{data[num].id}.</div>
      <p className={styles.question}>{data[num].question}</p>
      
      <div>
        <button className={styles.btn} onClick={() => nextSlide(0)}>
          {data[num].answers[0].content}
        </button>
      </div>
      <div>
        <button className={styles.btn} onClick={() => nextSlide(1)}>
          {data[num].answers[1].content}
        </button>
      </div>

      <img src={fox2} className={styles.pic}/>

      <div className={styles.copyright}>ⓒ2022. Eduwith all rights reserved.</div>
    </div>
    </div>
  )

}

export default TestQna;