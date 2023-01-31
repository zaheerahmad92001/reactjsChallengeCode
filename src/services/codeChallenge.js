import AxiosInstance from "../AxiosInstance";

const sendUserProfileRequest=async(data)=>{
    const res=await AxiosInstance.post('/create',data)
}

const sendUpdateUserProfileRequest=async(data)=>{
    const res=await AxiosInstance.put('/edit',data)
}
const sendGetUserProfileRequest = async()=>{
     const res=await AxiosInstance.get('/profile')
}
export {sendUserProfileRequest ,sendUpdateUserProfileRequest ,sendGetUserProfileRequest}