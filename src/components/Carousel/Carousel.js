import React from "react";
import './Carousel.css';

import Allproducts from "../Products/Allproducts";
import Productdata from '../Products/productdata.json';

export default function Carousel() {
  return (
    <>
      
      <Allproducts data={Productdata} />
    </>
  );
}
