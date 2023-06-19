import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Home.css";
import axios from "axios";
import ImageLoding from "../../hooks/ImageLoding";
import Category from "./Category/Category";
import FirstCategoty from "./FirstCategoty/FirstCategoty";

function Home() {
  const [HomeDate, setHomeDate] = useState([]);
  // image
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_API + "home?populate=*")
      .then((response) => {
        setHomeDate(response);
      })
      .catch((error) => console.log(error));
  }, []);

  // ==image==
  return (
    <div className="Home">
      <div className="welcomePhoto">
        {/* <ImageLoding image={"HomeDate"} Class="welcomePhotoImage" /> */}
        <Link className="welcomePhotoBtn" to={"#"}>
          Shop Now{" "}
        </Link>
      </div>
      <Category />
      <FirstCategoty />
    </div>
  );
}

export default Home;