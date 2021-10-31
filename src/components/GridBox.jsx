import React from "react";
import "../styles/GridBox.css";

function GridBox({ avatar, id, email, first_name, last_name }) {
  return (
    <div className="box">
      <div className="box__img">
        <img src={avatar} alt="" />
      </div>
      <div className="box__data">
        <h5>
          id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {id}
        </h5>
        <h5>email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}</h5>
        <h5>first_name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{first_name}</h5>
        <h5>last_name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{last_name}</h5>
      </div>
    </div>
  );
}

export default GridBox;
