import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// console.log(":::process.env.REACT_RAPID_API_KEY::::", process.env.REACT_RAPID_API_KEY);
const options = {
  url: BASE_URL,
  // params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  params:{maxResults:'50'},
  headers: {
    'X-RapidAPI-Key':'634bd58f13msh1b5f1d32cc960d1p19870ajsn8dc1acede281',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromApi =async (url) => {
 const {data} =await axios.get(`${BASE_URL}/${url}`,options);
 return data;
}