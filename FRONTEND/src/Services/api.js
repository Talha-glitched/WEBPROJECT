import axios from "axios";

 //const url="https://webproject-three.vercel.app/ ";
 const url="http://localhost:5000";
 const api=axios.create({
  url:url
});
export const addquote = async (quotedata) => {
return await axios.post(`${url}/reviews`,quotedata);


}

 

 export const getproduct=async()=>{
    const response= await axios.get(`${url}/viewproducts`);
    console.log("RUNNING");
    return response.data;
    
 }
                                                                                            
 export const addUserData = async (userData) => {
  console.log("API REACHED ",userData);
  return await axios.post(`${url}/signup`, userData);
  
}







export const addproduct = async (productData) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(`${url}/`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteproduct = async (productId) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(`${url}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateProduct = async (productId, updatedData) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.put(`${url}/${productId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
