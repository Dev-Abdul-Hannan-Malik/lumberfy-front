import React, { useState, useEffect } from "react";
import axios from "axios";
var hhe = "dd5ururm";
export default function Testcloud() {
  const [imageselected, setimageselected] = useState("");
  const [imagelink, setimagelink] = useState("");

  const uploadimage = () => {
    console.log(imageselected);
    const formData = new FormData();
    formData.append("file", imageselected);
    formData.append("upload_preset", "dd5ururm");
    axios
      .post("https://api.cloudinary.com/v1_1/drimnkool/upload", formData)
      .then((response) => {
        setimagelink(response.data.secure_url);
      });
  };
  return (
    <div className="hello">
      <button onClick={uploadimage}>upload</button>
      <img src={imagelink} alt="lets test" />

      <br />
    </div>
  );
}
