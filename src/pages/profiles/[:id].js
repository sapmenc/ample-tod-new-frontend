import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  formatDateLong,
  formatDateShort,
  formatLocation,
  validateEmail,
  validatePhoneNumber,
} from "@/assets/utilityFunctions";

import HashLoader from "react-spinners/HashLoader";
import Navbar from "@/components/Navbar/Navbar";
import { fetchProfileById } from "../api/index";
import { send } from "emailjs-com";
import { usePathname } from "next/navigation";

// @ts-ignore
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function profile() {
  const pathname = usePathname();
  const [id, setId] = useState("");
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryCompanyName, setEnquiryCompanyName] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMobile, setEnquiryMobile] = useState("");
  const [enquiryDetails, setEnquiryDetails] = useState("");

  const validateEnquiry = () => {
    if (!enquiryName) {
      toast.error("Please enter name!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!enquiryCompanyName) {
      toast.error("Please enter company name!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!validateEmail(enquiryEmail)) {
      toast.error("Please enter email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!validatePhoneNumber(enquiryMobile)) {
      toast.error("Please enter mobile number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!enquiryDetails) {
      toast.error("Please enter enquiry details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!validateEnquiry()) {
      return;
    }
    const body = {
      enquiryName: enquiryName,
      enquiryCompanyName: enquiryCompanyName,
      enquiryEmail: enquiryEmail,
      enquiryMobile: enquiryMobile,
      enquiryDetails: enquiryDetails,
      candidate: {
        profileId: profile?.profileId,
        name: profile?.name,
        profileTitle: profile?.profileTitle,
        yearsOfExperience: profile?.yearsOfExperience,
      },
    };
    console.log(body);
  };

  const handleProfileById = async (id) => {
    console.log("id", id);
    const res = await fetchProfileById(id);
    if (res.status === 200) {
      console.log(res.data.data);
      setProfile(res.data.data);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    if (id) {
      // console.log("id", id);
      setIsLoading(true);
      if (id) {
        handleProfileById(id).then(() => {
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    }
  }, [id]);
  useEffect(() => {
    if (pathname?.split("/")[pathname?.split("/").length - 1])
      setId(pathname?.split("/")[pathname?.split("/").length - 1]);
  });
  return (
    <div>
      <ToastContainer />
      <Navbar />
      {isLoading ? (
        <div className="mt-20 h-[70vh] flex justify-center items-center">
          <HashLoader
            color="#41436a"
            loading={isLoading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="mt-20 flex flex-col p-4 text-lg gap-4 lg:px-16">
          <h1 className="whitespace-nowrap truncate text-gray-500 font-bold px-5 md:px-10 lg:16">
            {/* @ts-ignore */}
            Profile ID : {profile?.profileId}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Candidate  Information*/}
            <div className="lg:w-[67%]">
              <div className="bg-white rounded-lg p-5 pt-0 md:p-10 md:pt-4">
                {/* Candidate Name */}
                <h1 className="text-3xl font-bold flex">
                  <span className="whitespace-nowrap truncate text-new_primary">
                    {profile?.name}
                  </span>
                </h1>
                <h2>
                  <span className="whitespace-nowrap truncate font-bold text-new_secondary">
                    {profile?.profileTitle}
                  </span>
                </h2>
                <h2 className="whitespace-nowrap truncate text-new_secondary">
                  {profile?.experiences?.map((experience, index) => {
                    return (
                      <span>
                        {index !== 0 && " | "}
                        {!experience?.isCurrentlyWorking && "Ex - "}
                        {experience.companyName}
                      </span>
                    );
                  })}
                </h2>
                <h2 className="whitespace-nowrap truncate text-new_secondary">
                  {profile?.educations?.map((education, index) => {
                    return (
                      <span>
                        {index !== 0 && " | "}
                        {education.institution}
                      </span>
                    );
                  })}
                </h2>
                <h3 className="whitespace-nowrap truncate text-new_secondary">
                  Additional Skills : {profile?.skills?.join(" | ")}
                </h3>

                <hr className="w-[90%] my-10" />

                <h3 className="font-bold text-xl text-new_secondary">
                  Locations:
                </h3>
                {/* Current Location */}
                <p className="whitespace-nowrap truncate text-new_secondary">
                  <span className="font-bold text-lg">Current Location: </span>
                  {/* @ts-ignore */}
                  {formatLocation(profile.primaryLocation)}
                </p>
                {/* Preferred Locations */}
                <div className="mt-5 text-new_secondary">
                  <p className="font-bold whitespace-nowrap truncate text-lg">
                    Preferred Location:
                  </p>
                  {/* @ts-ignore */}
                  {profile?.preferredLocations?.map((location, index) => (
                    <p className="whitespace-nowrap truncate" key={index}>
                      {`${index + 1}. `}
                      {formatLocation(location?.locationData)}
                    </p>
                  ))}
                </div>

                <hr className="w-[90%] my-10" />

                {/* Profile Summary */}
                <h3 className="font-bold text-xl text-new_secondary">
                  Profile Summary:
                </h3>

                <h3 className="font-bold text-lg pt-2 text-new_secondary">
                  {/* @ts-ignore */}
                  Experience: {`${profile?.yearsOfExperience} Years`}
                </h3>
                {/* Experience */}
                <div className="flex flex-col gap-6 pt-4 text-new_secondary">
                  {/* @ts-ignore */}
                  {profile?.experiences?.map((experience, index) => (
                    <div
                      className="p-5 md:p-8 flex flex-col gap-2 rounded-xl bg-[#F1F4FD]"
                      key={index}
                    >
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="font-bold text-lg">
                            {experience?.companyName}
                          </h3>
                          <h4 className="font-bold">{experience?.position}</h4>
                        </div>
                        <div className="font-bold text-sm lg:hidden">{`${formatDateShort(
                          experience?.startDate
                        )} - ${
                          experience?.isCurrentlyWorking
                            ? "Present"
                            : `${formatDateShort(experience?.endDate)}`
                        }`}</div>
                        <div className="font-bold text-sm hidden lg:inline">{`${formatDateLong(
                          experience?.startDate
                        )} - ${
                          experience?.isCurrentlyWorking
                            ? "Present"
                            : `${formatDateLong(experience?.endDate)}`
                        }`}</div>
                      </div>
                      {/* Job Description */}
                      <p className="rounded p-2 h-32 overflow-y-scroll">
                        {experience?.jobDescription}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-xl mt-7 text-new_secondary">
                  {/* @ts-ignore */}
                  Education:
                </h3>
                {/* Education */}
                <div className="flex flex-col gap-6 pt-4 text-new_secondary">
                  {/* @ts-ignore */}
                  {profile?.educations?.map((education, index) => (
                    <div
                      className="p-5 md:p-8 bg-[#F1F4FD] flex flex-col gap-2 rounded-xl"
                      key={index}
                    >
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="font-bold text-lg">
                            {education?.institution}
                          </h3>
                          <h4 className="font-bold">{`${education?.courseType} - ${education?.courseName}`}</h4>
                        </div>
                        <div className="font-bold text-sm lg:hidden">{`${formatDateShort(
                          education?.startDate
                        )} - ${
                          education?.isCurrentlyPersuing
                            ? "Present"
                            : `${formatDateShort(education?.endDate)}`
                        }`}</div>
                        <div className="font-bold text-sm hidden lg:inline">{`${formatDateLong(
                          education?.startDate
                        )} - ${
                          education?.isCurrentlyPersuing
                            ? "Present"
                            : `${formatDateLong(education?.endDate)}`
                        }`}</div>
                      </div>
                      {/* Job Description */}
                      <p className="bg-white rounded p-2 h-60 overflow-y-scroll">
                        {education?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Recruitment Enquiry */}
            <div className="tracking-wide bg-primary flex flex-col gap-4 items-center p-4 px-8 rounded-3xl lg:w-[33%] max-h-[550px]">
              <p className="font-bold text-xl lg:text-2xl my-2 text-white">
                Recruitment Enquiry
              </p>
              <input
                type="text"
                className="w-full rounded-lg p-3 outline-none"
                placeholder="Name"
                value={enquiryName}
                onChange={(e) => {
                  setEnquiryName(e.target.value);
                }}
              />
              <input
                type="text"
                className="w-full rounded-lg p-3 outline-none"
                placeholder="Company Name"
                value={enquiryCompanyName}
                onChange={(e) => {
                  setEnquiryCompanyName(e.target.value);
                }}
              />
              <input
                type="email"
                className="w-full rounded-lg p-3 outline-none"
                placeholder="Email"
                value={enquiryEmail}
                onChange={(e) => {
                  setEnquiryEmail(e.target.value);
                }}
              />
              <input
                type="text"
                className="w-full rounded-lg p-3 outline-none"
                placeholder="Mobile"
                value={enquiryMobile}
                onChange={(e) => {
                  setEnquiryMobile(e.target.value);
                }}
              />

              <textarea
                name=""
                id=""
                // @ts-ignore
                cols="30"
                // @ts-ignore
                rows="4"
                placeholder="Tell us about your requirement"
                className="w-full rounded-md p-2 outline-none"
                value={enquiryDetails}
                onChange={(e) => {
                  setEnquiryDetails(e.target.value);
                }}
              ></textarea>
              <button
                className="my-2 w-full p-2 font-bold tracking-wider rounded-xl bg-new_secondary text-white "
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
              {/* <ToastContainer autoClose={5000} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default profile;
