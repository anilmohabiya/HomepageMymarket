import React from 'react';

import Footer from './Footer';
import Services from './Services';

import foot1 from './images/foot1.jpg';
import Product from './Product';
import Material from './Material';

const Home =()=>{
    return(
        <>
      {/* main header */}
    <div class="container-fluid main_header">
      <div class="row">
       <div class="col-md-12 col-12 mx-auto">

        <div class="row">
          
         {/*right side div */} 
        {/*right side div */} 
        <div class="col-md-6 col-12 main_header_right ">

<div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foot1} class=" w-75" alt="..."/>
    </div>
  -
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>
          { /*left side div*/}
          <div class="col-md-6 col-12 main_header_left mt-2 hr4"><br/>
          {/* dotted line */}
       <div className="hr5 col-2"></div>
   
         <h2 className=" font-weight-normal mt-3">CASUAL SPORT SHOES</h2><br/>
        
         
        
  {/* horizontal line   */}
  <div class=" hr3 col-5">
                       
                         </div>
             <p>Enjoy the world of shopping online</p>

             <button type="button" class="btn btn-outline-secondary">50% OFF</button>

            <br/><div class=" hr4 col-12 mt-5">
                       
                       </div>
          </div>
          {/* our services*/ }
              <Services/>
     {/* material page */}
         <Material/>

    {/* product */}

    <section className="Contact us">
        <div className="container ">
           
            <div className='row'>
            <Product/>
            </div>     
      </div>
      </section>
     
    
        </div>   
      </div>
      <Footer/>
    </div>
</div>



        </>
    )
}

export default Home;