import axios, { AxiosRequestConfig } from "axios";

export const genericAxiosConfigs = <AxiosRequestConfig>{
    url: process.env.KAPI_2_GQL,
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
};

export const AxiosGenericQueryFunction = async (graphqlQVs: {
    query: string;
    variables: object;
}) =>
    axios({
        ...genericAxiosConfigs,
        data: {
            variables: graphqlQVs.variables,
            query: graphqlQVs.query,
        },
    });
