import React, { useEffect, useState } from "react";
import "../Main.css";
import InfoList from "./InfoList";
import IntroduceList from "./IntroduceList";
import data from "./Data.json";
import Side from "./Side";
import Sns from "./Sns";
import Dog from "./Dog";

const Main = () => {
    const [click, setClick] = useState(false);
return (
    <>
    <Side data = {data} />
    <InfoList data = {data}  />
    <div className="line">
    <IntroduceList data = {data}  />
    </div>
    <Sns data = {data} />
    <div className="dogImg">
    <button onClick={()=>{setClick(!click)}} className="btn">우리집 강아지</button>
    {click && <Dog/>}
    </div>
    </>
    )
};

export default Main;