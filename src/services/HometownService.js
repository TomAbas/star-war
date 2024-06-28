import defaultAxios from "../axios/axios";

export function getAllPlanets(params) {
  return defaultAxios.get("/planets", { params });
}

export function getPlanet(params) {
  return defaultAxios.get(`/planets/${params}`);
}
