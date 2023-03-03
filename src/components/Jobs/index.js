import {
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "./../../../node_modules/@heroicons/react/24/outline/index.js";
import React, { useEffect, useState } from "react";

const profiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const categories = [
  "Java developer",
  "Sales",
  "Product manager",
  "C++ developer",
  "Sales",
  "Product manager",
  "Python developer",
  "Sales",
  "Product manager",
  "Javascript developer",
  "Sales",
  "Product manager",
  "ReactJS developer",
  "Sales",
  "Product manager",
];

function Jobs() {
  const [selectedCategory, setSelectedCategory] = useState("Java developer");
  return (
    <div className="mt-32 bg-[#F1F4FD] relative h-[1200px] lg:h-[800px]  flex flex-col items-center px-8 md:px-16 pb-8 md:pb-16">
      {/* search bar */}
      <div
        id="searchbar"
        className={`flex flex-col gap-4 py-[18px] px-[41px] md:p-0 md:pl-[41px] md:flex-row md:items-center mx-8 md:max-w-[700px] lg:max-w-none bg-white absolute -top-[100px] md:-top-[35px] shadow-lg shadow-indigo-100/100 rounded-3xl`}
      >
        <div className="flex items-center h-[50px] p-2">
          <div className="scale-x-[-1] text-gray-200 h-[25px] w-[25px]">
            <MagnifyingGlassIcon />
          </div>
          <div className="h-full">
            <input
              className="h-full px-2 outline-none no-underline placeholder:tracking-wide"
              placeholder="Job title or keyword"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center h-[50px] p-2">
          <div
            className="text-gray-200 h-[25px] w-[25px]"
            placeholder="Location"
          >
            <MapPinIcon />
          </div>
          <div className="h-full">
            <input
              className="h-full px-2 outline-none no-underline placeholder:tracking-wide"
              placeholder="Location"
              type="text"
            />
          </div>
        </div>
        <button className="text-white bg-new_primary rounded-xl font-bold p-5 md:w-[250px] group">
          <p className="md:group-hover:scale-110 ease-in-out duration-200">
            Search
          </p>
        </button>
      </div>
      {/* jobs main */}
      <div className="mt-[180px] h-full md:mt-[100px] w-full flex flex-col items-center md:items-start lg:flex-row  gap-[30px] lg:gap-[114px]">
        {/* job categories */}
        <div className="w-full overflow-hidden lg:basis-2/6 xl:basis-2/5 lg:min-w-[292px] lg:max-w-[330px]">
          <h1 className="text-new_secondary tracking-wide font-bold text-[30px] text-center">
            Job Categories
          </h1>
          {/* job categories mobile view */}

          <select className="lg:hidden w-full mt-[22px] bg-white rounded-xl text-gray-400 h-10 px-5 outline-none">
            <option className="text-center" value="">
              --- All Profiles ---
            </option>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>

          {/*job categories desktop view */}
          <div className="hidden h-[570px] shadow-inner shadow-indigo-200/100 px-2 lg:flex flex-col gap-2 mt-5 py-2 overflow-scroll">
            {categories.map((category) => {
              return (
                <div
                  className={`${
                    selectedCategory === category
                      ? "bg-new_primary text-white"
                      : "bg-white text-gray-700 hover:bg-new_primary/80 hover:text-white"
                  } ease-in-out durarion-200 px-4 py-2 rounded-lg flex justify-between items-center cursor-pointer `}
                >
                  <p>{category}</p>
                  <div className="h-4 w-4">
                    <ChevronDoubleRightIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* job found */}
        <div className="w-full h-full basis-4/6 xl:basis-3/5 flex flex-col items-center">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start w-full">
            <h1 className="text-new_secondary tracking-wide font-bold text-[30px] text-center">
              Job Found
            </h1>
            {/* experience filter */}
            <div className="flex items-center bg-transparent mt-[13px]">
              <p className="text-new_secondary font-bold">sort by:</p>
              <select
                name=""
                id=""
                className="bg-transparent text-new_primary font-bold outline-none"
              >
                <option value="">1 - 5 years experience</option>
              </select>
            </div>
          </div>
          <div className="self-start w-full h-[720px] md:h-[780px] lg:h-[570px] mt-5  overflow-scroll flex flex-col p-5 gap-5 shadow-inner px-8 shadow-indigo-200/100">
            {profiles.map(() => {
              return (
                <div className="bg-white py-5 px-10 shadow-lg shadow-indigo-100/100 md:p-5 rounded-xl flex flex-col md:flex-row md:justify-between md:cursor-pointer md:hover:scale-105 duration-200">
                  <div className="w-full">
                    <h1 className="text-new_primary font-bold tracking-wide text-lg">
                      Java Developer
                    </h1>
                    <h2 className="text-gray-800 tracking-wide">
                      Springboot | Microservices
                    </h2>
                  </div>
                  <div className="flex items-center justify-between md:gap-5 md:justify-end w-full">
                    <div className="flex md:flex-col gap-2 md:gap-0">
                      <p className="text-gray-700 tracking-wide">view job</p>
                      <p className="text-slate-400 tracking-wide">
                        {2} days ago
                      </p>
                    </div>
                    <div>
                      <div className="w-5 h-5 flex justify-center items-center text-new_primary">
                        <ChevronDoubleRightIcon className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
