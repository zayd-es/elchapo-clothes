import { API_URL } from "@/lib/utils";
import axios from "axios";
  export const geNewArrivalsProducts = async () => {
      try {
        const data = await axios.get(`${API_URL}/products?filters[NewArrivals]=true&populate=*`);
        // console.log(data)
    return {
        success:{
            data: data?.data?.data,
            meta: data?.data?.meta
        },
        error:null
    }
      } catch (error) {
   return{ 
       success:null,
       error:error?.response?.data?.error?.message || 'Data Not Found'
   }
      }
    };
    export const getCategories = async () => {
      try {
        const res = await axios.get(
               `${API_URL}/categories?populate[products][populate]=images`
    
        );
    
        return {
          success: res.data.data, // 👈 directly return array
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