import React from "react";
import MentoItem from "./MentoItem";

function MentoList({geul, onView, togglePopup}) {

  
  return (
    geul && geul.map((item) => (
      <MentoItem key={item.m_no} item={item} onView={onView} togglePopup={togglePopup} />
    ))
  )

}

export default MentoList;