import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
    
  return (
    <section className='tours'>
    {tours.map(tour=>{
        
        return(
            
            
            <div >
                <Tour key={tour.id}  {...tour} removeTour={removeTour} />
            </div>
            
           
            
        )
    })}
    </section>
   
  )
}

export default Tours