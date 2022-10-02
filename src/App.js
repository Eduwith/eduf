import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import './reset.css'

//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Join from './components/user/Join';
import Volunteer from './routes/Volunteer';
import VolunteerDetail from './components/volunteer/VolunteerDetail';
import Mentoring from "./routes/Mentoring";
import Study from "./routes/Study";
import StudyDetail from './components/study/StudyDetail';
import StudyRegister from './components/study/StudyRegister';
import MyPage from "./routes/Mypage";
import MyMentoApply from './components/mypage/MyMentoApply/MyMentoApply';
import MyMento from './components/mypage/MyMento/MyMento';
import MyStudy from './components/mypage/MyStudy';
import MyScrap from './components/mypage/MyScrap';
import MyPoint from './components/mypage/MyPoint';
import Navbar from './components/home/Navbar';
import TestMain from './components/test/TestMain';
import TestQna from './components/test/TestQna';
import TestResult from './components/test/TestResult';
import MyEditRecruit from './components/mypage/MyMentoApply/MyEditRecruit';
import MenteeRecruit from './components/mentoring/Mentor/MenteeRecruit';
import MenteeMentoring from './routes/MenteeMentoring';
import FindPw from './components/user/FindPw';
import MentorRecruit from './components/mentoring/Mentee/MentorRecruit';
import Notice from './components/etc/Notice';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
        <Router>
          <Navbar isLogin={isLogin}/>
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<Home />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/findpw" element={<FindPw />}></Route>

            <Route path="/notice" element={<Notice/>}></Route>

            <Route path="/mypage" element={<MyPage/>}></Route>
            <Route path="/mymentoapply" element={<MyMentoApply/>}></Route>
            <Route path="/mymento" element={<MyMento/>}></Route>
            <Route path="/mystudy" element={<MyStudy/>}></Route>
            <Route path="/myscrap" element={<MyScrap/>}></Route>
            <Route path="/mypoint" element={<MyPoint/>}></Route>


            <Route path="/mentoring" element={<Mentoring />}></Route>
            <Route path="/studies" element={<Study />}></Route>
            <Route path="/studies/:idex" element={<StudyDetail />}></Route>
            <Route path="/studies/register" element={<StudyRegister />}></Route>
            <Route path="/volunteers" element={<Volunteer/>}></Route>
            <Route path="/volunteers/no=:idex" element={<VolunteerDetail />}></Route>

            <Route path="/test" element={<TestMain />}></Route>
            <Route path="/testqna" element={<TestQna />}></Route>
            <Route path="/result" element={<TestResult />}></Route>

            <Route path="/mentoring/mentor" element={<Mentoring/>}></Route>
            <Route path="/mentoring/mentee" element={<MenteeMentoring/>}></Route>

            <Route path="/mentorRecruit" element={<MentorRecruit />}></Route>
            <Route path="/menteeRecruit" element={<MenteeRecruit />}></Route>
            <Route path="/myEditRecruit/:m_no" element={<MyEditRecruit />}></Route>

            <Route path="/mentoring/:keyword" element={<Mentoring />}></Route>
            <Route path="/mentoring/filter" element={<Mentoring />}></Route>

            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
