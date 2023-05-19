import React from 'react'

const NotFound = ({ error }) => {
    return (
        <div className='grid justify-center items-start h-full'>
            <div>

                {/* text-stroke class may not work on some browsers */}

                <div className="text-center text-10xl font-extrabold text-stroke">
                    Oops!
                </div>
                <p className='text-center mt-10 uppercase font-bold'>{error}</p>
            </div>
        </div>
    )
}

export default NotFound 