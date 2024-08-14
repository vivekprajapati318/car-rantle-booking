import React from 'react';
import {Usedispatchcart,Usecart} from './Contexreducerpk';
export default function Card(props) {
  let carsno=props.carsno;
  const handelCart=()=>{

  }
  return (
    <div className="card sf mt-3 bg-secoundary text-light" style={{ width: "18rem", maxHeight: "500px" }}>
      <img
        src={carsno.image}
        className="card-img-top"
        alt={`${props.carsno.title} image`}  // Use props.name for alt text
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.carsno.title}</h5>  {/* Ensure correct prop usage */}
        <div className="car-price">Price: ${props.carsno.price}</div>
        <div className="car-start-production "><button className=' btn btn-success bg-success  fs-4 d-inline m-1'>buy</button>
      <button className='  btn btn-success fs-4  bg-success '>Rent</button></div>
      <hr></hr>
        <div className=" btn btn-success car-start-production" onClick={handelCart}><button className='  btn btn-success bg-success fs-4'>Add To Cart</button></div>
        <div className="car-class text-center mt-2 fs-5">
          Class: {props.carsno.class}
        </div>
      </div>
    </div>
  );
}
