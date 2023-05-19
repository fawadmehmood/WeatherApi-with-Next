import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (

    <footer className='text-center py-2'>
      <span className='font-bold'>Created by {" "}
        <Link className='text-violet-600 hover:underline' href="https://www.linkedin.com/in/fawadmehmood/" target="_blank" passHref> 
          Fawad Mehmood
        </Link>
      </span>
    </footer>
  )
}

export default Footer