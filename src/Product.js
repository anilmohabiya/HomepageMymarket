import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
const Product =()=>{

   
    return(
    <>
    <div className="mt-2">
    <h3 className=" font-weight-bold text-dark">Recomanded Product</h3> 
    </div>
    <div className="container-fluid mb-5">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4" >
    {
       Sdata.map((val,ind)=>{
           return <Card
             key={ind} imgsrc={val.imgsrc} 
             title={val.title}
             rating={val.rating}
           />
       })
    }
    </div>

    </div>
     </div>
    </div>
               
        </>

        
    );
};
export default Product;