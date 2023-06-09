import React, { useEffect, useState } from "react";

import style from "./product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import COMPLoading from "../../components/loading/COMPLoading";
import ProductDetails from "./ProductDetails";
function Product() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  let params = useParams();
  //  console.log(params.itemId); // "hotspur"

  const [Mydata, setMyData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(false);
    // console.log(Paramsapi);
    axios
      .get(
        `${process.env.REACT_APP_URL_API}prodects/${params.itemId}/?populate=*`
      )
      .then(function (response) {
        //  console.log(response.data.data);
        setMyData(response.data.data);
      })
      .then(() => {
        setloading(true);
        //    console.log(Mydata);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.itemId]);

  return (
    <div>{loading ? <ProductDetails Mydata={Mydata} /> : <COMPLoading />}</div>
  );
}

export default Product;
