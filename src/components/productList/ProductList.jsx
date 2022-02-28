import React from "react";
import "./productList.css";
import usu1 from "../../usu-images/usu1.jpg";
import usu2 from "../../usu-images/usu2.jpg";
import usu3 from "../../usu-images/usu3.jpg";
import usu4 from "../../usu-images/usu4.jpg";
import usu8 from "../../usu-images/usu8.jpg";
import usu7 from "../../usu-images/usu7.jpg";
import Product from "../product/Product";

const ProductList = () => {
  return (
    <>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Process</h1>
          <p className="pl-desc">
            There are some highlights from Speaking Club
          </p>
        </div>
        <div className="pl-list">
          <Product img={usu1} />
          <Product img={usu2} />
          <Product img={usu3} />
          <Product img={usu7} />
          <Product img={usu4} />
          <Product img={usu8} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
