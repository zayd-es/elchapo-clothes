import axios from "axios";

// هاد السطر كايجيب الرابط من Vercel إلا كان كاين، وإلا ماكانش كايخدم ب localhost
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

export const geNewArrivalsProducts = async () => {
  try {
    // زدنا BASE_URL قبل من الرابط
    const data = await axios.get(`${BASE_URL}/api/products?filters[NewArrivals]=true&populate=*`);
    
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
    // نفس الشيء هنا، زدنا BASE_URL
    const res = await axios.get(`${BASE_URL}/api/categories?populate[products][populate]=images`);

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