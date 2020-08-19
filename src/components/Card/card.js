import React from "react";
import "./style.css";

const Card = (props) => {
  const { id, title } = props;

  return (
    <div key={"key" + id} className="post-card">
      <div className="tooltip">
        <a href={"/post/" + id}>{title}</a>
        <span className="tooltiptext">Go to article</span>
      </div>
    </div>
  );
};

export default Card;
