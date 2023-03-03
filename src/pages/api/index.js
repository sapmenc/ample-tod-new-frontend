// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Axios from "axios";
export const prefix = "/api/v1";
export const baseurl = "https://levya-careers-backend-ybmd.vercel.app";
export const url = baseurl + prefix;
const API = Axios.create({ baseURL: url });

export const fetchAllTitles = async () => API.get("/title");

export const fetchAllProfiles = async () => API.get("/profile");

export const fetchProfileById = async (id) => API.get(`/profile/${id}`);
