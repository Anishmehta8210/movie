import React from 'react'

const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    const url = process.env.API_KEY; 
    const options = { 
      method: 'GET', 
      
    };
    let photos = await fetch(url,options);
    let data = await photos.json()
    console.log(data)
  return (
    <>
   <div className="container">
   {
        data.map((value,key) => (
          <div className='card mb-3'  key={key.id}>
             <h5 className="card-header">{value.show.name}</h5>
            
            <div className="card-body">
            <p className="card-text">{value.show.summary}</p>
              

            </div>
            
            </div>
        ))
      }
   </div>
    </>
  )
}

export default page