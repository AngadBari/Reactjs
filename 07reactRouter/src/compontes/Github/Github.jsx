
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data ,setData]=useState([])
    useEffect(()=>{
       fetch("https://api.github.com/users/AngadBari")
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           setData(data);
         });
    },[])
    return (
      <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600 ">
        GitHub followers:{data.followers}
      </div>
    );
}

export default Github
