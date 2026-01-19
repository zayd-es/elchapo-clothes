import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import { API_URL } from "@/lib/utils";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { documentId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/products/${documentId}?populate=*`
        );
        setProductDetails(res.data.data); // Changed from res to res.data
      } catch (error) {
        console.log(error);
      }
    };
    if (documentId && documentId !== ":documentId") fetchProductDetails();
  }, [documentId]);

  return (
    <div>
      <div className="">
        {/* <BreadCrumb /> */}
        {productDetails && <ProductDetailsCard product={productDetails} />}
      </div>
    </div>
  );
};

export default ProductDetails;
