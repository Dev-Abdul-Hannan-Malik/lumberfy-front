import React, { useState } from "react";

export default function Test() {
  const [la, setla] = useState(["g", "u", "t"]);
  var count = 0;

  return (
    <div>

      {la.map((item, key) => {
        //if(count===2){
          return (<p>{item}</p>)
        }
        //count= count+1
      //}

       )}
    </div>
  );
}
