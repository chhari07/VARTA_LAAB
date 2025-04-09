// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Contactus = () => {
  const [communicationMethod, setCommunicationMethod] = useState('');

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Left Image Section */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Roadside_Tea_Shop_-_Dock_Eastern_Boundary_Road_-_Kidderpore_-_Kolkata_2016-01-24_9099.JPG/1280px-Roadside_Tea_Shop_-_Dock_Eastern_Boundary_Road_-_Kidderpore_-_Kolkata_2016-01-24_9099.JPG"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="#" className="flex items-center mb-6">
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3092 18.3098..."
                          stroke="#4F46E5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        470-601-1911
                      </h5>
                    </a>

                    <a href="#" className="flex items-center mb-6">
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.81501 8.75..."
                          stroke="#4F46E5"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        Vartalaab@gmail.com
                      </h5>
                    </a>

                    <a href="#" className="flex items-center">
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 12.9169..."
                          stroke="#4F46E5"
                          strokeWidth="2"
                        />
                        <path
                          d="M17.5 11.6148..."
                          stroke="#4F46E5"
                          strokeWidth="2"
                        />
                      </svg>
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        {/* Add location if needed */}
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-gradient-to-r from-orange-500 to-red-600 font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            />

            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <label className="flex items-center mr-11 cursor-pointer">
                  <input
                    type="radio"
                    name="communication"
                    value="email"
                    className="peer hidden"
                    checked={communicationMethod === 'email'}
                    onChange={(e) => setCommunicationMethod(e.target.value)}
                  />
                  <span className="border border-gray-300 rounded-full w-4 h-4 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 mr-2"></span>
                  Email
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="communication"
                    value="phone"
                    className="peer hidden"
                    checked={communicationMethod === 'phone'}
                    onChange={(e) => setCommunicationMethod(e.target.value)}
                  />
                  <span className="border border-gray-300 rounded-full w-4 h-4 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 mr-2"></span>
                  Phone
                </label>
              </div>
            </div>

            <input
              type="text"
              placeholder="Message"
              className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700    hover:bg-gradient-to-r bg-sky-600 to-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
