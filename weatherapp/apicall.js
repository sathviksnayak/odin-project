



async function getWeather(city){
   const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.API_KEY}`;
try{
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      return data;

   }

   catch(error){

      console.log(error);

   }

}

export default getWeather