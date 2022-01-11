import React, { useState } from 'react'

const Card = ({ place, removeCard }) => {
  const [isInterested, setIsInterested] = useState(false)
  const { title, description, price, img, id } = place
  return (
    <div key={id} className='card'>
      <img src={img} alt={title} />
      <article>
        <div className='card-info'>
          <h4>{title}</h4>
          <h4 className='card-price'>${price}</h4>
        </div>
        <p>
          {isInterested ? description : `${description.substring(0, 200)}...`}
          <button onClick={() => setIsInterested(!isInterested)}>
            {isInterested ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeCard(id)}>
          Not Interested
        </button>
      </article>
    </div>
  )
}

export default Card
