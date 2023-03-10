import {
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "./../../../node_modules/@heroicons/react/24/outline/index.js";
import React, { useEffect, useRef, useState } from "react";

import HashLoader from "react-spinners/HashLoader";
import Image from "next/image.js";
import Link from "next/link.js";
import { profilesNotFound } from "@/assets/Images.js";
import { searchProfiles } from "@/assets/utilityFunctions.js";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const expRanges = [
  "0 - 2 years experience",
  "3 - 5 years experience",
  "6 - 7 years experience",
  "8 - 10 years experience",
  "10+ years experience",
];
function Jobs({
  titles,
  filteredProfiles,
  isLoading,
  setIsLoading,
  profiles,
  dispatchFilteredProfiles,
}) {
  const titleInput = useRef();
  const locationInput = useRef();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedRange, setSelectedRange] = useState(0);
  const [searchProps, setSearchProps] = useState({
    search_title: "",
    search_location: "",
    search_category: "",
  });
  const handleSearch = async () => {
    await searchProfiles(profiles, searchProps, dispatchFilteredProfiles);
  };

  useEffect(() => {
    if (searchProps.shouldSearch === true) {
      handleSearch();
      setSearchProps({ ...searchProps, shouldSearch: false });
    }
  }, [searchProps]);
  return isLoading ? (
    <div className="p-8 h-[750px] flex justify-center items-center">
      <HashLoader
        color="#eb4a6a"
        loading={isLoading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
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
              ref={titleInput}
              className="h-full px-2 outline-none no-underline placeholder:tracking-wide"
              placeholder="Job title or keyword"
              type="text"
              onChange={(e) => {
                setSearchProps({
                  ...searchProps,
                  search_title: e.target.value,
                  shouldSearch: false,
                });
              }}
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
              ref={locationInput}
              className="h-full px-2 outline-none no-underline placeholder:tracking-wide"
              placeholder="Location"
              type="text"
              onChange={(e) => {
                setSearchProps({
                  ...searchProps,
                  search_location: e.target.value,
                  shouldSearch: false,
                });
              }}
            />
          </div>
        </div>
        <button className="text-white bg-new_primary rounded-xl font-bold p-5 md:w-[250px] group">
          <p
            className="md:group-hover:scale-110 ease-in-out duration-200"
            onClick={() => {
              setSearchProps({
                ...searchProps,
                search_category: "",
                shouldSearch: true,
              });
              setSelectedTitle("");
            }}
          >
            Search
          </p>
        </button>
      </div>
      {/* jobs main */}
      <div className="mt-[180px] overflow-hidden h-full md:mt-[100px] w-full flex flex-col items-center md:items-start lg:flex-row  gap-[30px] lg:gap-[114px]">
        {/* job categories */}
        <div className="w-full overflow-hidden lg:basis-2/8 xl:basis-2/6 lg:min-w-[292px] lg:max-w-[330px]">
          <h1 className="text-new_secondary tracking-wide font-bold text-[30px] text-center">
            Job Categories
          </h1>
          {/* job categories mobile view */}

          <select
            className="lg:hidden w-full mt-[22px] mb-[28px] bg-white rounded-xl text-gray-400 h-10 px-5 outline-none"
            onChange={(e) => {
              setSearchProps({
                search_title: "",
                search_location: "",
                search_category: e.target.value,
                shouldSearch: true,
              });
            }}
          >
            <option className="text-center" value="">
              --- All Profiles ---
            </option>
            {(titles || []).map((title) => {
              return <option value={title.name}>{title.name}</option>;
            })}
          </select>

          {/*job categories desktop view */}
          <div className="job-category-desktop hidden h-[570px] shadow-inner shadow-indigo-200/100 px-2 lg:flex flex-col gap-2 mt-5 py-2 overflow-scroll">
            {(titles || []).map((title) => {
              return (
                <div
                  className={`${
                    selectedTitle === title.name
                      ? "bg-new_primary text-white"
                      : "bg-white text-gray-700 hover:bg-new_primary/80 hover:text-white"
                  } ease-in-out durarion-200 px-4 py-2 rounded-lg flex justify-between items-center cursor-pointer`}
                  onClick={(e) => {
                    titleInput.current.value = "";
                    locationInput.current.value = "";
                    if (selectedTitle === title.name) {
                      setSelectedTitle("");
                      // need to remove title.name from search_title
                      setSearchProps({
                        search_title: "",
                        search_location: "",
                        search_category: "",
                        shouldSearch: true,
                      });
                    } else {
                      setSelectedTitle(title.name);
                      // need to set search_title = title.name
                      setSearchProps({
                        search_title: "",
                        search_location: "",
                        search_category: title.name,
                        shouldSearch: true,
                      });
                    }
                  }}
                >
                  <p>{title.name}</p>
                  <div className="h-4 w-4">
                    <ChevronDoubleRightIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* job found */}
        <div className="w-full h-full basis-6/8 xl:basis-4/6 flex flex-col items-center">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start w-full">
            <h1 className="text-new_secondary tracking-wide font-bold text-[30px] text-center">
              Active Profiles (
              {filteredProfiles[0]?.length +
                filteredProfiles[1]?.length +
                filteredProfiles[2]?.length +
                filteredProfiles[3]?.length +
                filteredProfiles[4]?.length}
              )
            </h1>
          </div>
          <div className="job-found self-start w-[88vw] md:w-[82vw] lg:w-[50vw] xl:w-[60vw] h-[720px] overflow-x-scroll md:h-[780px] lg:h-[570px] mt-5 flex gap-8 shadow-inner px-8 py-4 shadow-indigo-200/100">
            {filteredProfiles.map((profiles, key) => {
              if (profiles.length > 0) {
                return (
                  <div className="min-w-[350px] w-[350px] max-w-[350px] flex flex-col p-3  bg-[#c7d4fa] rounded-xl">
                    <div className="mb-6 bg-new_primary text-md text-white w-full p-3 text-center font-bold rounded-lg">
                      {expRanges[key]}
                    </div>
                    <div className="overflow-y-scroll overflow-x-hidden p-2 flex flex-col gap-5">
                      {(profiles || []).map((profile) => {
                        return (
                          <Link href={`profiles/${profile._id}`}>
                            <div className="bg-white min-h-[100px] h-[100px] max-h-[100px] px-5 shadow-lg shadow-indigo-100/100 md:p-5 rounded-xl flex flex-col justify-center items-center md:flex-row md:justify-between md:cursor-pointer md:hover:scale-105 duration-200">
                              <div className="w-full">
                                <h1 className="text-new_primary font-bold tracking-wide text-md truncate overflow-hidden">
                                  {profile.profileTitle}
                                </h1>
                                <h2 className="text-new_secondary tracking-wide text-sm truncate overflow-hidden">
                                  {profile.skills.join(" | ")}
                                </h2>
                              </div>
                              <div className="flex items-center justify-between md:gap-5 md:justify-end w-full text-sm overflow-hidden">
                                <div className="flex md:flex-col gap-28 md:gap-0 overflow-hidden">
                                  <p className="text-gray-700 tracking-wide overflow-hidden">
                                    view job
                                  </p>
                                  <p className="text-slate-400 tracking-wide overflow-hidden">
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
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
