import React from "react";
import Sdata from "./Sdata";

function Card(props){
     console.log(props)
    return (
      <>
        {/* <div className="container">
            <div className="row">
                <div className="col-md-4">
                <img src={props.imgsrc} alt="no img" />
                <div className="card_info">
                    <span className="card_catagory">
                        {props.title}
                    </span>
                    <h3 className="card_tital">
                        {props.sname}
                    </h3>
                    <a href= target="_blank">
                        <button className="btn"> Watch Now</button>
                    </a>
                   </div>
                </div>
            </div>
        </div> */}

        <div className="card mt-2 text-center" style={{ width: "100%",height:"100%", borderRadius:"15px" }}>
          <img src={props.imgsrc} className="card-img-top" alt="my image" style={{ width: "100%",height:"370px" }}/>
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:"25px", color:"white"}}>{props.title}</h5>
            <p className="card-text" style={{fontSize:"35px"}}>{props.sname}</p>
            <a href={props.link} className="btn btn-outline-primary rounded-pill " style={{width:"100%", fontSize:"28px"}} target="blank">
              Watch Now
            </a>
          </div>
        </div>
      </>
    );
}

export default Card;
