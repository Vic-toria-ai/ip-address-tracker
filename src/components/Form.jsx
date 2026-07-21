import React from "react";
import patternBgDesktop from "../assets/pattern-bg-desktop.png";
import arrow from "../assets/icon-arrow.svg";

function Form({ ipAddress, setIpAddress, fetchData, error, setError }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetchData(ipAddress);
  }
  return (
    <section>
      <div className="absolute ">
        <img
          src={patternBgDesktop}
          alt="desktop background"
          className="w-full object-cover h-70"
        />
      </div>
      <div className="relative p-8">
        <h1 className="text-center text-xl md:text-3xl text-white font-semibold mb-6">
          IP Address Tracker
        </h1>
        <div>
          <form
            className="flex justify-center max-w-2xl mx-auto md:mb-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={ipAddress}
              placeholder={
                // to put the error message inside the input.
                error ? error : "Search for any IP address or domain"
              }
              required
              onChange={(e) => {
                setIpAddress(e.target.value);
                if (error) {
                  setError(null);
                }
              }}
              className={`bg-white rounded-l-lg px-4 md:w-full ${
                error ? "border-2 border-red-500 placeholder:text-red-500" : ""
              }`}
            />

            <button
              type="submit"
              className="bg-gray-950 px-4 py-4 rounded-r-lg"
            >
              <img src={arrow} alt="" />
            </button>
          </form>
          {/* {error && (
            <p className="text-red-400 text-center text-lg p-2">{error}</p>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default Form;
