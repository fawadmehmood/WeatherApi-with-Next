import React from 'react'
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';
import NotFound from './404';
import { useSelector } from 'react-redux';


const Forecast = () => {
    const forecastData = useSelector((state) => state.weather.forecastData);
    const error = useSelector((state) => state.weather.error);
    const loading = useSelector((state) => state.weather.loading);

    let renderForecast;


    if (forecastData) {
        renderForecast = forecastData.map((forecast, indx) => <Card key={indx} forecast={forecast} />)
    }


    return (
        <div className='max-w-4xl w-full mx-auto '>
            {loading && <LoadingSpinner />}
            {error && <NotFound error={error}/> }

            {!error && !loading &&
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                    {renderForecast}
                </div>}
        </div>
    )

}

export default Forecast