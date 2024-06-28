import defaultAxios from "../axios/axios";

export function getAllCharacters(params) {
  return defaultAxios.get("/people", { params });
}

export function getCharacter(id) {
  return defaultAxios.get(`/people/${id}`);
}
