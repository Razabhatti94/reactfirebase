import React from "react";


function Gallery(){
   
   
return (
    <>
    
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto flex flex-wrap">
    <div className="flex w-full mb-10 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-left">
      Drive Success with Affordable Car Rentals for Fleet Services
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-justify">
      If you’re looking to manage a fleet of vehicles for your business, our affordable car rental services are the perfect solution. We offer a wide range of reliable cars, ensuring smooth and efficient operations for your company. Whether you need vehicles for short-term use or long-term contracts, we provide flexible rental plans tailored to your specific needs. With our easy booking process and dedicated customer support, we help you stay focused on growing your business while we take care of your transportation needs. Drive your success with us today!
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/5046305/pexels-photo-5046305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    
    </>
)
}
export default Gallery;