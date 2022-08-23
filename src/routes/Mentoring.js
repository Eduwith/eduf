import React, { useEffect, useState } from "react";
import styles from "./Mentoring.module.css";
import MentoApply from "../components/mentoring/MentoApply";
import MentiRecruit from "../components/mentoring/MenteeRecruit";
import axios from "axios";
import MentoList from "../components/mentoring/MentoList";
import { Link } from "react-router-dom";



function Mentoring() {

  //글 불러오기
  const [geul, setGeul] = useState([]);
  const [current, setCurrent] = useState(0);

  const url = 'http://localhost:8080';
  //const url = 'http://34.64.249.190:8080/';

  const fetchGeul = async () => {
    try {
      setGeul(null);

      axios.get(url + '/mentoring/mentor')
      //axios.get('/dummyMData.json')
        .then(function (response) {
          if (response) {
            console.log('멘토링 조회 성공!');
            setGeul(response.data); // 연결하면서 수정하기

          }
        })
    } catch (err) {
      console.log("Mentoring Error >>", err);
    }
  };

  useEffect(() => {
    fetchGeul();
  }, []);

  //검색 - kw / 
  const [kw, setKw] = useState("");

  const handleUserInput = (e) => {
    console.log(e.target.value);
    setKw(e.target.value);
  }

  //팝업
  const [showPopup, setShowPopup] = useState(false);

  const [showApplyPopup, setShowApplyPopup] = useState(false);

  const onView = (id) => {
    setCurrent(geul && geul.find(item => item.id === id))
    
  }

  const togglePopup = () => {
    setShowPopup(current => !current);
    
  };

  const toggleApplyPopup = () => {
    setShowApplyPopup(current => !current);
  };

  //라디오 버튼 - 분야
  const [fieldSt, setFieldSt] = useState('');
  const handleClickField = (rb) => {
    setFieldSt(rb)
  }

  //셀렉트 버튼 - 기간
  const period = [1, 3, 6, 12];
  const [periodSt, setPeriodSt] = useState(1);
  const handleClickPeriod = (e) => {
    setPeriodSt(e.target.value)
  }

  //셀렉트 버튼 - 지역
  const region_big = ["서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
  const area1 = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
  const area2 = ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];
  const area3 = ["대덕구", "동구", "서구", "유성구", "중구"];
  const area4 = ["광산구", "남구", "동구", "북구", "서구"];
  const area5 = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
  const area6 = ["남구", "동구", "북구", "중구", "울주군"];
  const area7 = ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];
  const area8 = ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "여주군", "연천군"];
  const area9 = ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"];
  const area10 = ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"];
  const area11 = ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"];
  const area12 = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
  const area13 = ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
  const area14 = ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];
  const area15 = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
  const area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];
  const area =
  [area1, area2, area3, area4, area5, area6, area7, area8, area9, area10, area11, area12, area13, area14, area15, area16 ];
  const [regionB, setRegionB] = useState("서울특별시");
  const handleClickBRegion = (e) => {
    setRegionB(e.target.value)
  }

  const [regionS, setRegionS] = useState("");
  const handleClickSRegion = (e) => {
    setRegionS(e.target.value)
  }

  const region = regionB + regionS;

  //강의 방식
  const [way, setWay] = useState();
  const handleClickWay = (rb) => {
    setWay(rb)
  }

   //handleSubmit
   const filterTitle = (Array.isArray(geul)) ? geul.filter((p) => {
    return (p.name ? p.name.replace(" ", "").includes(kw) : null) || (p.title ? p.title.replace(" ", "").includes(kw) : null)
  }) : geul;

  //키워드 검색
  const filterKW = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/mentoring/search/${kw}`, {
        keyword: kw
      });
      if (response) {
        console.log('키워드 검색 성공', response.data);
      }
      else {
        console.log('검색 결과 없음');
      }
    } catch (err) {
      console.log("keyword search Error >>", err);
    }
  };

  //박스 검색
  const filterBox = async () => {
    try {
      const response = await axios.get('http://localhost:8080/mentoring/search/filter', 
       { params: {
        field: fieldSt,
        region: region,
        m_period: periodSt,
        way: way}}
      );
      if (response) {
        setGeul(response.data);
        console.log('조건 검색 성공', response.data);
      }
      else {
        console.log('검색 결과 없음');
      }
    } catch (err) {
      console.log("Box search Error >>", err);
    }
  }

  return (
    <div>
      <div className={styles.back}>
        <div className={styles.Title}>

          멘토 찾기
          <Link to="/menteeRecruit" className={styles.apply_btn}>멘토 신청</Link>

          <form className={styles.nav_form}>
            <input value={kw} onChange={handleUserInput} type="text" placeholder="멘토 검색" className={styles.total_search} />
            <img onClick={filterKW} src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" className={styles.search_img} />
          </form>


        </div>

        <div className={styles.big_box}>
          <form method="post" className={styles.search}>
            <div className={styles.cn1}>
              <div className={styles.subject}>
                <div style={{ fontSize: "24px", marginRight: "10px" }}><span style={{ color: "#A0CBFF" }}>■</span> 분야</div>

                <label><input type="radio" name="category" defaultValue={fieldSt === '진로'} onChange={() => handleClickField('진로')} /> 진로</label>
                <label><input type="radio" name="category" defaultValue={fieldSt === '교육'} onChange={() => handleClickField('교육')} /> 교육</label>
                <label><input type="radio" name="category" defaultValue={fieldSt === '문화예술스포츠'} onChange={() => handleClickField('문화예술스포츠')} /> 문화예술스포츠</label>
                <label><input type="radio" name="category" defaultValue={fieldSt === '기타'} onChange={() => handleClickField('기타')} /> 기타</label>

                <div className={styles.hiddenblock}></div>
              </div>

              <div className={styles.subject}>
                <div style={{ fontSize: "24px", marginRight: "10px" }}><span style={{ color: "#A0CBFF" }}>■</span> 멘토링기간</div>

                <select name="period" defaultValue={periodSt} onChange={handleClickPeriod} className={styles.selectbox1}>

                  {period.map((item) => (
                    <option value={item} key={item}>
                      {item}개월 이상
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.cn1}>
              <div className={styles.subject}>
                <div style={{ fontSize: "24px", marginRight: "10px" }}><span style={{ color: "#A0CBFF" }}>■</span> 지역</div>

                <select name="region" defaultValue={regionB} onChange={handleClickBRegion} className={styles.region}>

                  {region_big.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select name="region_sub" defaultValue={regionS} onChange={handleClickSRegion} className={styles.region}>

        {region_big.map((big, idex) => (
                            regionB === big ? area[idex].map((item) => (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            )) : null
                          ))}

                </select>
                <div className={styles.hiddenblock2}></div>
              </div>

              <div>
                <div className={styles.subject}>
                  <div style={{ fontSize: "24px", marginRight: "10px" }}><span style={{ color: "#A0CBFF" }}>■</span> 강의 방식</div>
                  <label><input type="radio" name="how" value={way === 'ON'} onClick={() => handleClickWay('ON')} /> 온라인</label>
                  <label><input type="radio" name="how" value={way === 'OFF'} onClick={() => handleClickWay('OFF')} /> 오프라인</label>
                </div>
              </div>
            </div>

            <button type="button" onClick={filterBox} className={styles.scBtn}>검색</button>

          </form>

          <div className={styles.group}>
            <div className={styles.middle_title}>🔎 멘티 구해요!</div>
            {kw !== null ? <MentoList geul={filterTitle} onView={onView} togglePopup={togglePopup} /> : <MentoList geul={geul} onView={onView} togglePopup={togglePopup} />}

  
            {kw !== null ? showPopup && (
               <MentoApply togglePopup={togglePopup}  geul={filterTitle} current={current} />
            ) : showPopup && (
               <MentoApply togglePopup={togglePopup}  geul={filterTitle} current={current} />
            ) }                      

            {showApplyPopup && (
              <MentiRecruit toggleApplyPopup={toggleApplyPopup} />
            )}

          </div>
        </div>
      </div>
    </div>

  );
}

export default Mentoring;
