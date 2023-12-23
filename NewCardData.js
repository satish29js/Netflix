import React from "react";
import Newcard from "./Newcard";
import Sdata from "./Sdata";

function NewCardData() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="heading_style">
            List in top 5 Netflix series in 2023
          </h1>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <Newcard
              imgsrc={Sdata[0].imgsrc}
              title={Sdata[0].title}
              sname={Sdata[0].sname}
              link={Sdata[0].link}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCardData;
