import Image from 'next/image';
import Link from 'next/link';


  

const ShowMovie = async () => {
  
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
        <div className="row gap-5 ">
        {
        data.map((value,key) => (
          <div className='card col-md-3 mb-3 mx-auto mt-5'  style={{width:"18rem"}}width="40px" key={key.id}>
            <Image width="200" height="200" src={value.image} alt='images'/>
            
            <div className="card-body">
              <Link href="./showlist" className='btn btn-success rounded-lg items-center float-end'>Show More</Link>
              

            </div>
            
            </div>
        ))
      }

           
        </div>
    </div>
    </>
  )
}

export default ShowMovie