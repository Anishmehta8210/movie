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
   
   <div className="container mt-3">
   {
        data.map((value,key) => (
          <div className='card col-md-4 mb-3 col-lg-12 mt-5'  key={key.id}>
             <h5 className="card-header display-6">{value.show.name}</h5>
            
            <div className="card-body">
            <p className="card-text lead">{value.show.summary}</p>
              

            </div>
            
            </div>
        ))
      }
   </div>
   
    </>
  )
}

export default page