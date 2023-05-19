import axios from 'axios';

const BASEURL = `https://api.openweathermap.org/data/2.5/forecast`;
const APPID = process.env.NEXT_PUBLIC_APPID;

 export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        q: city,
        appid: APPID
      }
    });

    return response.data.list.filter(item => item.dt_txt.includes('12:00:00'))
  } catch (error) {
    throw Error(error);
  }
};



