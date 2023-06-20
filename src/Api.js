import axios from "axios";

const baseUrl = "https://api.unsplash.com/search/photos"

const searchImages = async (term)=>{
    const response = await axios.get(baseUrl,{
            headers:{
                Authorization:'Client-ID <Enter your client-id>'
            },
            params:{
                query:term
            }
        });
   
    return response.data.results;
} 



export default searchImages