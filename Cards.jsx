import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


function Cards(){

    return(
        
        <>
       
       <div className="container-fluid">
        <div className="row">
        {/* <h1 className="heading_style">List in top 5 Netflix series in 2023</h1> */}
            
        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[0].imgsrc}
        title = {Sdata[0].title}
        sname = {Sdata[0].sname}
        link = {Sdata[0].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[1].imgsrc}
        title = {Sdata[1].title}
        sname = {Sdata[1].sname}
        link = {Sdata[1].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[2].imgsrc}
        title = {Sdata[2].title}
        sname = {Sdata[2].sname}
        link = {Sdata[2].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[3].imgsrc}
        title = {Sdata[3].title}
        sname = {Sdata[3].sname}
        link = {Sdata[3].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[4].imgsrc}
        title = {Sdata[4].title}
        sname = {Sdata[4].sname}
        link = {Sdata[4].link}
        />
        </div>

        
        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[5].imgsrc}
        title = {Sdata[5].title}
        sname = {Sdata[5].sname}
        link = {Sdata[5].link}
        />
        </div>
        
        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[6].imgsrc}
        title = {Sdata[6].title}
        sname = {Sdata[6].sname}
        link = {Sdata[6].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[7].imgsrc}
        title = {Sdata[7].title}
        sname = {Sdata[7].sname}
        link = {Sdata[7].link}
        />
        </div>


        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[8].imgsrc}
        title = {Sdata[8].title}
        sname = {Sdata[8].sname}
        link = {Sdata[8].link}
        />
        </div>


        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[9].imgsrc}
        title = {Sdata[9].title}
        sname = {Sdata[9].sname}
        link = {Sdata[9].link}
        />
        </div>


        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[10].imgsrc}
        title = {Sdata[10].title}
        sname = {Sdata[10].sname}
        link = {Sdata[10].link}
        />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[11].imgsrc}
        title = {Sdata[11].title}
        sname = {Sdata[11].sname}
        link = {Sdata[11].link}
        />
        </div>
{/* 
        <div className="col-lg-3 col-md-3 col-sm-6">
        <Card  imgsrc = {Sdata[12].imgsrc}
        title = {Sdata[12].title}
        sname = {Sdata[12].sname}
        link = {Sdata[12].link}
        />
        
        </div> */}

</div>

       </div>  
       
        </>
        
    )
}

export default Cards;