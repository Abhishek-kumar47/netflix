import React from 'react'

const Error = (props) => {
  return (
    <div className='h-4/6 w-8/12 bg-black '>
        <p className='text-lg text-white'>{props.message}</p>
    </div>
  )
}

export default Error