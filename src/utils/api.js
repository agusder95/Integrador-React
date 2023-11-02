import axios from "axios";

export const fetchApi = async (url) => {
     try{
          const response = await axios.get(`https://dummyjson.com${url}`)
          return response.data
 }   catch(err){
          console.log('Error fetching data: ',err)
          return null
     }
}

