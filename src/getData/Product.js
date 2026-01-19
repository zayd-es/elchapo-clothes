import axios from "axios";

export const geNewArrivalsProducts = async () => {
  try {
    // حيدنا localhost باش يخدم الـ Proxy اللي صاوبنا في vite.config.js
    const data = await axios.get("/api/products?filters[NewArrivals]=true&populate=*");
    
    return {
      success: {
        data: data?.data?.data,
        meta: data?.data?.meta
      },
      error: null
    }
  } catch (error) {
    return {
      success: null,
      error: error?.response?.data?.error?.message || 'Data Not Found'
    }
  }
};

export const getCategories = async () => {
  try {
    // نفس الشيء هنا، كنبدلو الرابط باش يبدا بـ /api ديريكت
    const res = await axios.get("/api/categories?populate[products][populate]=images");

    return {
      success: res.data.data,
      meta: res.data.meta,
      error: null,
    };
  } catch (error) {
    return {
      success: null,
      meta: null,
      error: error?.response?.data?.error?.message || "Data Not Found",
    };
  }
};