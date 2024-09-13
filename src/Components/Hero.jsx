import React from "react";


function Hero(){
   
   
return (
    <>
    
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Ford Mustang 2018 
        <br className="hidden lg:inline-block" />
        GT 5.0
      </h1>
      <p className="mb-8 leading-relaxed text-justify">
      The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate.
      </p>
      <div className="flex justify-center">
        <button className="min-w-36 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add to Cart
        </button>
        <button className="min-w-36 text-center ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Details
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://images.pexels.com/photos/14741506/pexels-photo-14741506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  </div>
</section>

    
    </>
)
}
export default Hero;