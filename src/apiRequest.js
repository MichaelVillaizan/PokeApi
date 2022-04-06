import axios from "axios";
const pokeApi = "https://pokeapi.co/api/v2/"

export const apiRequest = async(searchText,endPoint) =>{
    
        const {data} = await axios.get(`${pokeApi}${endPoint}/${searchText}`)
        .catch(function (error) {
            if (error.response.status === 404) {
                
                return({text:"no existe ese poke"});
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
                console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            
            });
        
        return data;

}