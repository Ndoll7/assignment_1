import React from 'react'

const Card = (props:any) => {
  return (
    <div>
      <h1 className='text-blue-950'><strong><u>Student ID Card</u></strong></h1>
      <h2  className='text-blue-500'><strong className='text-blue-800'>Name:</strong>{props.name}</h2>
      <h1 className='text-blue-500'><strong className='text-blue-800'>RollNo:</strong>{props.rollno}</h1>
      <h1  className='text-blue-500'><strong className='text-blue-800'>Day:</strong>{props.day}</h1>
      <h1  className='text-blue-500'><strong className='text-blue-800'>Day:</strong>{props.age}</h1>
    </div>
  )
}

export default Card
