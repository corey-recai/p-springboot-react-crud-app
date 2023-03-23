import httpClient from "utils/http";

const getAll = () => {
  return httpClient.get("/notes");
};

export default {
  getAll,
};
