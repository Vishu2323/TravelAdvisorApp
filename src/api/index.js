import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'


export const getPlacesData =async(sw, ne)=>{
    try{
        const{data: {data}}  =await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              
             },
             headers: {
               'X-RapidAPI-Key': '916d4ae3b4mshcb0968e7c0b15b8p1cb6b7jsn7c63081414b6',
               'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
             }
           });
          return data;
    }
    catch(error){
     console.log(error)
    }
}




