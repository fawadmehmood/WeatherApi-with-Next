import React from 'react'
import { Wind, Droplet } from 'react-bootstrap-icons';

const Card = ({ forecast }) => {
    console.log(forecast)
    const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-GB', { day: '2-digit' });
    const dayName = new Date(forecast.dt * 1000).toLocaleString(
        'default', { weekday: 'short' }
    );



    return (
        <div className="flex-col px-8 py-6 items-center rounded-xl shadow-lg">
            <div className="">
                <p className='text-xs font-semibold'>{dayName} {forecastDate}</p>
            </div>

            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <h3 className='text-2xl font-bold'>{(Math.round((forecast.main.temp - 273.15) * 100) / 100).toFixed(0)}{'\u00B0'}</h3>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
                </div>


                <div className="">
                    <p className="">{forecast.weather[0].main} </p>
                    <div className="flex items-center gap-2">
                        <Wind />
                        <p>{forecast.wind.speed.toFixed(0)}<em>m/s</em></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Droplet />
                        <p>{forecast.main.humidity}<em>%</em></p>
                    </div>

                </div>

            </div>



        </div>

    )
}

export default Card