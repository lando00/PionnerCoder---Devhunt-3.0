import axios from "axios"

export const getData = async ()=>{
    let res = []
 try {
    res = axios.get(process.env.API_URL+"matiere")
   //  console.log("data ",res)
 } catch (error) {
    console.log(error)
 }

 return res
}

