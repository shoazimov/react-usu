import React from "react";
import "./productList.css";
import usu1 from "../../usu-images/usu11.jpeg";
import usu2 from "../../usu-images/usu2.jpeg";
import usu3 from "../../usu-images/usu3.jpeg";
import usu4 from "../../usu-images/usu4.jpg";
import usu5 from "../../usu-images/usu4.jpeg";
import usu6 from "../../usu-images/usu7.jpg";
import usu7 from "../../usu-images/usu5.jpeg";
import usu8 from "../../usu-images/usu6.jpeg";
import usu9 from "../../usu-images/usu7.jpeg";
import usu10 from "../../usu-images/usu8.jpeg";
import usu12 from "../../usu-images/usu10.jpeg";

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
          <Product img={usu4} />
          <Product img={usu2} />
          <Product img={usu3} />
          <Product img={usu5} />
          <Product img={usu6} />
          <Product img={usu7} />
          <Product img={usu8} />
          <Product img={usu9} />
          <Product img={usu10} />
          <Product img={usu12} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
