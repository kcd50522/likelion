import React, { useEffect, useState } from "react";
const Dog = (click) => {

    const [fade,setFade] = useState('');


    useEffect(()=>{
       setFade('end') ;
    
        return ()=>{
            setFade('');
            console.log("클릭할때마다 useEffect 실행");
        };
    },[click]);
  
    return (
      <div className = "dog_"> 
        <img src='./img/dog.png' className={'start '+ fade}></img>
      </div>
    );
  };

export default Dog;