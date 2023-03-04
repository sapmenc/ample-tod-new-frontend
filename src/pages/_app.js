import "@/styles/globals.css";

import { fetchAllProfiles, fetchAllTitles } from "./api/index";
import { useEffect, useReducer, useState } from "react";

import { filteredProfilesReducer } from "../reducers";

export default function App({ Component, pageProps }) {
  const [titles, setTitles] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProfiles, dispatchFilteredProfiles] = useReducer(
    filteredProfilesReducer,
    []
  );
  const handleFetchAllTitles = async () => {
    try {
      const { data } = await fetchAllTitles();
      if (data.error) {
        console.log(data.error);
      } else {
        setTitles(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetchAllProfiles = async () => {
    try {
      const { data } = await fetchAllProfiles();
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setProfiles(data.data);
        dispatchFilteredProfiles({
          type: "ADD_NEW_DATA",
          newData: data.data,
        });
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    console.log(filteredProfiles);
  }, [filteredProfiles]);
  useEffect(() => {
    console.log("titles :", titles);
  }, [titles]);

  useEffect(() => {
    setIsLoading(true);

    handleFetchAllTitles().then(() => {
      handleFetchAllProfiles().then(() => {
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <Component
      {...pageProps}
      titles={titles}
      filteredProfiles={filteredProfiles}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      profiles={profiles}
      dispatchFilteredProfiles={dispatchFilteredProfiles}
    />
  );
}
