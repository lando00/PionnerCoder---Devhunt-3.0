import { currentUser, redirectToSignIn, clerkClient } from "@clerk/nextjs";
import axios from "axios";

export const initialProfile = async () => {
    const user = await currentUser();
    let res= null
    const api_url = process.env.API_URL
  
    if (!user) {
      return redirectToSignIn();
    }

    try {
      res = await axios.post(api_url+"login",{email:user.emailAddresses[0].emailAddress})
      console.log(res)
    } catch (error) {
      console.log('error')
    }
    
    if(res?.data?.token){
      const userId =  user.id
      const params = {externalId: res.data.token}
      const updatedUser = await clerkClient.users.updateUser(userId,params)
      res = updatedUser
    }

    return res
}