import axios, { AxiosRequestConfig } from "axios";

export const genericAxiosConfigs = <AxiosRequestConfig>{
  url: process.env.KAPI_2_GQL,
  method: "post",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
}


export const AxiosGenericQueryFunction = async (graphqlBody: string) => {
  return axios({
    ...genericAxiosConfigs,
    data: { query: graphqlBody },
  })
}
