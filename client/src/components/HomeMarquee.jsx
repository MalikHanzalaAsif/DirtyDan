import React from 'react';
import "../styles/HomeMarquee.css";

const HomeMarquee = ({text, position}) => {
  return (
    <div className={`HomeMarquee HomeMarquee-${position}`}>
        <p>{text}</p>
    </div>
  )
}

export default HomeMarquee;