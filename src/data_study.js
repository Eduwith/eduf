function data_study() {
    //const vlists = [["오디오북 녹음하기", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["자료 번역하기", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["디지털 취약계층을 위한 강의", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["강의 자막 업로드", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"]];
    const slists = [
        {
            s_no:0,
            title:"오디오북 녹음하기", 
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "5",
            total_people: "10",
            s_period: "5",
            tag: ["한글", "문법", "맞춤법"],
            recruitYN: "Y",
            scrapYN: "N",
        },
        {
            s_no:1,
            title:"자료 번역하기",
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "2",
            total_people: "10",
            s_period: "5",
            tag: ["한글", "문법"],
            recruitYN: "N",
            scrapYN: "N",
        },
        {
            s_no:2,
            title: "디지털 취약계층을 위한 강의",
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "7",
            total_people: "10",
            s_period: "5",
            tag: [],
            recruitYN: "N",
            scrapYN: "Y",
    
        },
        {
            s_no:3,
            title:"강의 자막 업로드",
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "0",
            total_people: "10",
            s_period: "5",
            tag: ["한글", "문법", "맞춤법"],
            recruitYN: "Y",
            scrapYN: "N",
        },
        {
            s_no:4,
            title: "디지털 취약계층을 위한 강의",
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "7",
            total_people: "10",
            s_period: "5",
            tag: ["한글"],
            recruitYN: "Y",
            scrapYN: "N",
    
        },
        {
            s_no:5,
            title:"강의 자막 업로드",
            contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
            r_start_date: "2022.02.28",
            r_end_date: "2022.03.06",
            s_start_date: "2022.03.07",
            s_end_date: "2023.01.31",
            current_people: "0",
            total_people: "10",
            s_period: "5",
            tag: [],
            recruitYN: "Y",
            scrapYN: "Y",
        }
    ]
    
    return(
        slists
    )
}

export default data_study;

// export default [
//             {
//                 vid:0,
//                 vtitle:"오디오북 녹음하기", 
//                 vcountry: "대한한국",
//                 vrecruitperiod: "2022.02.28~2022.03.06",
//                 vperiod: "2022.03.07~2023.01.31",
//                 vpeople: "5/10"
//             },
//             {
//                 vid:1,
//                 vtitle:"자료 번역하기",
//                 vcountry: "대한한국",
//                 vrecruitperiod: "2022.02.28~2022.03.06",
//                 vperiod: "2023.03.07~2023.01.31",
//                 vpeople: "0/10"
//             },
//             {
//                 vid:2,
//                 vtitle: "디지털 취약계층을 위한 강의",
//                 vcountry: "서울",
//                 vrecruitperiod: "2022.02.28~2022.03.06",
//                 vperiod: "2022.03.07~2023.01.31",
//                 vpeople: "2/10"
        
//             },
//             {
//                 vid:3,
//                 vtitle:"강의 자막 업로드",
//                 vcountry: "대한한국",
//                 vrecruitperiod: "2022.02.28~2022.03.06",
//                 vperiod: "2022.03.07~2023.01.31",
//                 vpeople: "5/10"
//             }
//         ]