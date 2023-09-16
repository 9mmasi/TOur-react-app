import React from 'react'

const Tour = ({id,name,image,price,info,removeTour}) => {
  return (
    <div>
        <article  className='tour-card'>
                <img src={image} alt="Avatar" />
                <div className="container">
                <h4><b>{name}</b></h4>
                 
                 <p className='price'>${price}</p>
                 
                </div>
                <p className='info'>{info}</p>
                <button onClick={()=>{removeTour(id)}}> Not Interested</button>
            </article>
    </div>
  )
}

export default Tour