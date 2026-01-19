import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "./Loading";
import NewArrivalsCard from "./NewArrivalsCard";
import EmptyState from "./EmptyState";

const CategoryDetails = () => {
  const { documentId } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(categoryDetails);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/categories/${documentId}?populate[products][populate]=images`
        );
        setLoading(true);
        setCategoryDetails(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (documentId) fetchProductDetails();
  }, [documentId]);

  return (
    <div className="w-full min-h-screen bg-white">
      {loading ? (
        /* 1. Loading State Wrapper */
        <div className="w-full h-[70vh] flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        /* 2. Main Content (wrapped in a Fragment) */
        <>
          {/* Category Header */}
          <div className="py-16 md:py-24 border-b border-zinc-100 mb-10">
            <h1 className="text-4xl md:text-7xl text-center font-black uppercase tracking-tighter">
              {categoryDetails?.name}
            </h1>
            <p className="text-center text-zinc-400 text-xs tracking-[0.4em] mt-4 uppercase">
              Explore the collection
            </p>
          </div>

          <div className="container mx-auto px-6 md:px-12 pb-20">
            {categoryDetails?.products &&
            categoryDetails.products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {categoryDetails.products.map((product) => (
                  <div key={product.id} data-aos="fade-up">
                    <NewArrivalsCard product={product} isNew={false} />
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <EmptyState />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryDetails;
