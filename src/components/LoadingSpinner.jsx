import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='h-full grid justify-center items-center'>
            <div className='w-8 h-8 border-4 border-solid border-violet-400 border-t-violet-500 rounded-full animate-spin-slow'>
            </div>

        </div>
    )
}

export default LoadingSpinner