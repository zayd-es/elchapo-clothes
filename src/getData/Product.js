import axios from "axios";

// الرابط الأساسي: كيقرأ من Vercel أو كيرجع لـ Localhost
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

export const geNewArrivalsProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products?filters[NewArrivals]=true&populate=*`);
    
    // Strapi V5 كيرجع البيانات ف response.data.data
    // ولكن بعض المرات الترتيب كيختلف، هاد السطر كايضمن لينا ديما نلقاو المصفوفة (Array)
    const result = response.data.data || response.data;

    return {
      success: {
        data: Array.isArray(result) ? result : [], // كنأكدو بلي راها Array باش .map() ما تفرقعش
        meta: response.data.meta || {}
      },
      error: null
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: { data: [], meta: {} }, // كنرجعو Array خاوية ف حالة الخطأ باش السيت ما يتبلوكاش
      error: error?.response?.data?.error?.message || 'Data Not Found'
    };
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/categories?populate[products][populate]=images`);
    
    // نفس المنطق لضمان وصول البيانات بشكل صحيح
    const result = response.data.data || response.data;

    return {
      success: Array.isArray(result) ? result : [],
      meta: response.data.meta || {},
      error: null,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      success: [],
      meta: null,
      error: error?.response?.data?.error?.message || "Data Not Found",
    };
  }
};