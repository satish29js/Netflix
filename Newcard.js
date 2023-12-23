import React from "react";

function Newcard(props) {
  return (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <img
        src={props.imgsrc}
        className="card-img-top"
        alt="No Img"
        style={{ width: "100%", height: "370px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.sname}</h5>
        <p className="card-text">{props.title}</p>
        <a href={props.link} className="btn btn-primary">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Newcard;
