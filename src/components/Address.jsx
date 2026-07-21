import React from "react";

function Address({address}) {
  const location = address?.location
  return (
    <div>
      <section
        className="relative uppercase p-8 bg-white 
        rounded-lg mx-8 shadow-md grid grid-cols-1 md:grid-cols-4 
        text-center md:text-start gap-4 md:max-w-4xl md:mx-auto -mb-60 md:-mb-15"
        style={{ zIndex: "500" }}
      >
        <div className="md:border-r md:border-gray-400">
          <h1 className="font-semibold text-gray-700 tracking-wider mb-2 md:mb-0">
            IP Address
          </h1>
          <p className="font-bold text-gray-800 text-md">{address?.ip ? address?.ip:"No Data."}</p>
        </div>

        <div className="md:border-r md:border-gray-400">
          <h1 className="font-semibold text-gray-700 tracking-wider mb-2 md:mb-0">
            location
          </h1>
          <p className="font-bold text-gray-800 text-md">
            {
              location?.city && location?.region ?
              `${location?.city}, ${location?.region}`:"Location not Found."
            }
          </p>
        </div>

        <div className="md:border-r md:border-gray-400">
          <h1 className="font-semibold text-gray-700 tracking-wider mb-2 md:mb-0">
            timezone
          </h1>
          <p className="font-bold text-gray-800 text-md">
            {
              location?.timezone ? `UTC ${location?.timezone}`:"No Data."
            }
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-gray-700 tracking-wider mb-2 md:mb-0">
            isp
          </h1>
          <p className="font-bold text-gray-800 text-md">
            {
              address?.isp ? address?.isp : "No Data."
            }
          </p>
        </div>
      </section>
      
    </div>
  );
}

export default Address;
