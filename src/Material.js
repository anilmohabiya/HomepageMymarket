import React from 'react';
import anil9 from './images/anil8.jpg';
import jaket from './images/jacket.jpg';
import beans from './images/beans.jpg';
import sky from './images/sky.jpg';
import camera from './images/camera.jpg'
import bb from './images/bb2.jpg';
import blue from './images/blue1.jpg';
const Material =()=>{
    return(
        <>
           
{/*Our Team */}
    <section className="ourteam">
        <div className="container  mt-3 ">
        <p className=" font-weight-bold">Trending Product</p>
            <div className='row'>
            
 <div className ="col-md-2 col-4 mx-auto">
 <figure class="figure">
  <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"><br/>40% OFF</p></figcaption>
  
</figure>
 </div>
            
 <div className ="col-md-2 col-4 mx-auto">
 <figure class="figure">
  <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"><br/>10% OFF</p></figcaption>
</figure>
 </div>

 <div className ="col-md-2 col-4 mx-auto">
 <figure class="figure">
  <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"> <br/>20% OFF </p></figcaption>
</figure>
 </div>

 <div className ="col-md-2 col-4 mx-auto">
 <figure class="figure">
  <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"> <br/>40% OFF</p></figcaption>
</figure>
 </div>


 
 <div className ="col-md-2 col-4">
 <figure class="figure">
  <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"> <br/>40% OFF</p></figcaption>
</figure>
 </div>


 
 <div className ="col-md-2 col-4 mt-5">

 <i class="fa fa-arrow-circle-right fa-3x" aria-hidden="true"></i>
 </div>
            </div>



        
           
                       <div className='row'>
                    <p className=" font-weight-bold">Amazing Offers</p>
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p><br/>40% OFF</p></figcaption>
             
           </figure>
            </div>
                       
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p><br/>10% OFF</p></figcaption>
           </figure>
            </div>
           
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p> <br/>20% OFF </p></figcaption>
           </figure>
            </div>
           
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p> <br/>40% OFF</p></figcaption>
           </figure>
            </div>
                       </div>



                       <div class="row">
          
          {/*right side div */} 
           <div class="col-md-6 col-12 main_header_right mt-3">
 
           <div class="card bg-dark text-white">
  <img class="card-img" src={blue} alt="Card " / >
  <div class="card-img-overlay">
    <h5 class="card-title mt-3 text-center">SALE AND DISSCOUNT</h5>
    <p class="card-text text-center mt-3">ADVERTISEMENT</p>
    <div class="container">
  <div class="row">
    <div class="col text-center">
    <button type="button" class="btn btn-warning text-center">Shop now</button>
    
    </div>
  </div>
</div>
  
  </div>
</div>
 
           </div>
           { /*left side div*/}
           <div class="col-md-6 col-12 main_header_left  ">
           <div class="card bg-dark text-white">
  <img class="card-img" src={bb} alt="Card "/>
 
</div>
           </div>
           </div>
                       <div className='row'>
            <p className=" font-weight-bold">New Arrival</p>
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p className=" text-center"><br/>40% OFF</p></figcaption>
             
           </figure>
            </div>
                       
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p className=" text-center"><br/>10% OFF</p></figcaption>
           </figure>
            </div>
           
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p className=" text-center"> <br/>20% OFF </p></figcaption>
           </figure>
            </div>
           
            <div className ="col-md-3 col-3">
            <figure class="figure">
             <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
             <figcaption class="figure-caption"><p> <br/>40% OFF</p></figcaption>
           </figure>
            </div>
                       </div>
                        <div className='row'>
            
 <p className=" font-weight-bold ">Justsold</p>
 <div className ="col-md-3 col-3">
 
 <figure class="figure">
 
  <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"><br/>40% OFF</p></figcaption>
  
</figure>
 </div>
            
 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"><br/>10% OFF</p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"> <br/>20% OFF </p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"> <br/>40% OFF</p></figcaption>
</figure>
 </div>
            </div>

            <div className='row'>
            
 <p className=" font-weight-bold ">Brand you Follow</p>
 <div className=" text-right">
 <button type="button" class="btn btn-success">View All</button>
 </div>
 <div className ="col-md-3 col-3">
 
 <figure class="figure">
 
  <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"><br/>40% OFF</p></figcaption>
  
</figure>
 </div>
            
 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"><br/>10% OFF</p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p  className=" text-center"> <br/>20% OFF </p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p className=" text-center"> <br/>40% OFF</p></figcaption>
</figure>
 </div>
            </div>

        

       
        </div>
    </section>

        </>
    );
};
export default Material;
