import httpClient from "@utils/http";
import { AxiosResponse } from "axios";

export const getAll = (): Promise<AxiosResponse<any, any>> => {
  return httpClient.get("/notes");
};
