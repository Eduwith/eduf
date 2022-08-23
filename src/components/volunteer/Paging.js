import React from "react";
import Pagination from "react-js-pagination";
import "./Paging.module.css";

const Paging = ({page, totalCount, postPerpage, pageRangeDisplayed, handlePageChange}) => {
    return(
        <Pagination
                activePage={page} //현재 페이지
                totalItemsCount={totalCount ? totalCount : 0} //총 데이터 개수
                itemsCountPerPage={postPerpage} //한 페이지당 보여줄 데이터 개수
                pageRangeDisplayed={pageRangeDisplayed} //Paginator 내에서 보여줄 페이지의 범위
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}/> // 페이지가 바뀔 때 핸들링
    );
}

export default Paging;