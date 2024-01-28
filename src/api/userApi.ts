import axios from "axios"



const URL: string = "http://localhost:2255/api"

export const registerUser = async (email: any) => {
try {
    return await axios.post(`${URL}/create-user`, { email }).then((res: any) =>{
        return res?.data
    });
} catch (error) {
    return error;
}
}

export const verifyUser = async (userID: string) => {
   try {
    return await axios.get(`${URL}/verify-user/${userID}`).then((res: any) =>{
        return res.data
       })
   } catch (error) {
    return error
   }
}

export const loginUser = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/sign-in-user`, data, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};


