import React, { useState } from "react";

function NewComponent(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <p> vous avez cliqué {count} fois</p>
            <button onClick={()=>setCount(count+1)}>click here</button>
        </div>
    )
}