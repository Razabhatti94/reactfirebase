import React from 'react'
import { Button } from "flowbite-react";

function Product({category, title, price, src, rating}) {
  return (
    <div  className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a className="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block"
        src={src}
      />
    </a>
    <div className="mt-4 ">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-left">
        {category}
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium text-left">
        {title}
      </h2>
      <p className="mt-1 text-left font-bold my-1 text-blue-500">${price}</p>
      <p className='my-1 text-left '>{rating}</p>
      <div>
        <Button className="bg-blue-500 hover:bg-blue-700">Add to Cart</Button>
      </div>
    </div>
  </div>
  )
}

export default Product