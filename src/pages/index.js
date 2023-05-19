import { useState } from "react";
import Image from 'next/image'
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';
import Forecast from '@/components/Forecast';
import Footer from '@/components/Footer';

import { useDispatch } from 'react-redux';
import { setforecastData, setError, setLoading } from '../redux/weatherSlice';
import { fetchForecastData } from './api/weatherAPI';



export default function Home() {
  const dispatch = useDispatch();


  const resetState  = () => {
    dispatch(setLoading(true)); 
    dispatch(setError(null)); 
    dispatch(setforecastData(null));
  }

  const handleSearchChange = async (city) => {
    try {
      resetState();

      const weatherData = await fetchForecastData(city);
      dispatch(setforecastData(weatherData));
    } catch (error) {
      dispatch(setforecastData(null));
      dispatch(setError(error.message));
      dispatch(setLoading(false)); 

    }  finally {
      dispatch(setLoading(false)); 
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-5 bg-gradient-to-br from-orange-200 via-sky-200 to-violet-400">
    <Header/>
      <SearchBox onSearchChange={handleSearchChange}/>
    <main className= "py-8 grid w-full flex-1">
      <Forecast/>
    </main>
    <Footer />

    </div>
  )
}
