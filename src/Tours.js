import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour,clearHandler}) => {



  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <button className='btn' onClick={clearHandler}>Clear All</button>
      <div className='underline' style={{marginTop:'10px',backgroundColor:'black'}}></div>
    </div>
    <div>
      {tours.map((tour)=>{
        return(
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        )
      })}
    </div>
  </section>;
};

export default Tours;
