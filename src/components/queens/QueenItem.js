import React from 'react'

const QueenItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image_url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Queen Name:</strong> {item.name}
            </li>
            <li>
              <strong>Quote:</strong> {item.quote}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
    

export default QueenItem