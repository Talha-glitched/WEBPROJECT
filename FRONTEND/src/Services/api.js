import axios from "axios";
const url="https://webproject-three.vercel.app";
const api=axios.create({
    url:url
});
export const addquote = async (quotedata) => {
return await axios.post(`${url}/reviews`,quotedata);


}
export const  addproduct= async(productdata)  =>{
return await axios.post(`${url}/`,productdata);

 }
 

 export const getproduct=async()=>{
    const response= await axios.get(`${url}/viewproducts`);
    console.log("RUNNING");
    return response.data;
    
 }
 export const deleteproduct=async(productid)=>{
const response=await api.delete(`${url}/${productid}`);

return response.data;

 }
 export const updateProduct = async (productId, updatedData) => {
    try {
      const response = await api.put(`${url}/${productId}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };                                                                                             
