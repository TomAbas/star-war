import defaultAxios from "../axios/axios";

export function getAllSpecies(params) {
  return defaultAxios.get("/species", { params });
}

export function getSpecies(params) {
  return defaultAxios.get(`/species/${params}`);
}
