import React, { useState, useEffect } from "react";
function App(){
  const [image, setImage] = useState(null);

  useEffect(()=>{
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then (res => res.json())
    .then (res=>{setImage(res.message)})
  }, []);

  return(
    <div>
        {image?(
            <img src={image} alt='A random dog'></img>
        ):<p>loading...</p>}
    </div>
  )
}
export default App;
