import React from 'react'

const Card = (props) => (
    <div className='bg-white rounded-lg shadow-lg p-5 hover:'>
        <h1 className='text-xl'>{props.icon}</h1>
        <h1 className='text-black font-bold'>{props.title}</h1>
        <span className='text-black text-sm text-gray-500'>{props.description}</span>
    </div>
)

export default Card
