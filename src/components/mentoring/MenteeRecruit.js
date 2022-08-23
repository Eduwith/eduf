import React, { useState } from "react";
import styles from "./MenteeRecruit.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IdState } from "../../recoil/RecoilId";
import { useRecoilValue } from "recoil";

function MenteeRecruit() {
  const navigate = useNavigate();

  const role = "O";
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [teaching, setTeaching] = useState("");
  const [mPeriod, setMPeriod] = useState("1");
  const [keyword, setKeyword] = useState("친절해요");
  const [info, setInfo] = useState("");


  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onFieldHandler = (event) => {
    setField(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onTeachingHandler = (event) => {
    setTeaching(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onMPeriodHandler = (event) => {
    setMPeriod(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onKeywordHandler = (event) => {
    setKeyword(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }
  const onInfoHandler = (event) => {
    setInfo(event.currentTarget.value);
    console.log(event.currentTarget.value);
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
    [area1, area2, area3, area4, area5, area6, area7, area8, area9, area10, area11, area12, area13, area14, area15, area16];
  const [regionB, setRegionB] = useState("서울특별시");
  const handleClickBRegion = (e) => {
    setRegionB(e.target.value)
    console.log(e.target.value)
  }

  const [regionS, setRegionS] = useState("");
  const handleClickSRegion = (e) => {
    setRegionS(e.target.value)
    console.log(e.target.value)
  }

  const region = regionB + regionS;


  //const url = 'http://34.64.249.190:8080';
  const url = 'http://localhost:8080';

   const handleSubmit = async () => {
    try {
      axios.post(url + '/mentoring/recruitment', {
        role: role,
        title: title,
        field: field,
        region: region,
        way: teaching,
        m_period: mPeriod,
        keyword: keyword,
        info: info,
      })
        .then(function (response) {
          if (response.data) {
            alert('멘티 모집글이 등록되었습니다.');
            navigate('/mentoring/mentor') // 멘토 찾기 사이트로 간다.
          }
          else {
            alert('멘티 모집글 등록에 실패하였습니다.');
          }
        })
    } catch (err) {
      console.log("Mentoring Recruit Error >>", err);
    }
  };

  const handleSubmit2 = () => {
    navigate('/mentoring/mentor');
  }

  return (
    <div>
      <div className={styles.title_box}>
        <span className={styles.big_title}>멘티 모집글</span>
      </div>
      <div className={styles.outer_box}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inner_box}>
            <div className={styles.left}>제목</div>
            <input type="text" className={styles.input_title} value={title} onChange={onTitleHandler} placeholder="제목을 입력하세요." />
          </div>

          <div className={styles.outside}>
            <div className={styles.inner_box}>
              <div className={styles.left}>분야</div>
              <div className={styles.radio_field}>
                <label><input type="radio" name="field" value="진로" onChange={onFieldHandler} />&nbsp;진로</label>
                <label><input type="radio" name="field" value="교육" onChange={onFieldHandler} />&nbsp;교육</label>
                <label><input type="radio" name="field" value="문화예술스포츠" onChange={onFieldHandler} />&nbsp;문화예술스포츠</label>
                <label><input type="radio" name="field" value="기타" onChange={onFieldHandler} />&nbsp;기타</label>
              </div>
            </div>

            <div className={styles.period}>
              <div className={styles.left}>멘토링 기간</div>
              <select name="period" onChange={onMPeriodHandler}>
                <option value="1">1개월 이상</option>
                <option value="3">3개월 이상</option>
                <option value="6">6개월 이상</option>
                <option value="12">12개월 이상</option>
              </select>
            </div>
          </div>

          <div className={styles.outside}>
          <div className={styles.inner_box}>
            <div className={styles.left}>지역</div>
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
          </div>

          <div className={styles.way}>
            <div className={styles.left}>강의방식</div>
            <div className={styles.checkbox}>
              <label><input type="checkbox" name="teaching" value="on" onChange={onTeachingHandler} />&nbsp;온라인</label>
              <label><input type="checkbox" name="teaching" value="off" onChange={onTeachingHandler} />&nbsp;오프라인</label>
            </div>
          </div>
          </div>
          <div className={styles.inner_box}>
            <div className={styles.left}>특징</div>
            <select name="keyword" onChange={onKeywordHandler} value={keyword} className={styles.keyword}>
              <option value="친절해요">친절해요</option>
              <option value="성실해요">성실해요</option>
              <option value="재밌어요">재밌어요</option>
              <option value="똑똑해요">똑똑해요</option>
            </select>
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>소개글</div>
            <input type="text" value={info} onChange={onInfoHandler} className={styles.input_desc} placeholder="멘토에게 하고 싶은 말, 자기소개 등을 적어주세요." />
          </div>

          <button type="button" onClick={handleSubmit} className={styles.btn} >등록하기</button>
          <button type="button" onClick={handleSubmit2} className={styles.cbtn} >취소하기</button>
        </form>
      </div>

    </div>
  );
}
export default MenteeRecruit;