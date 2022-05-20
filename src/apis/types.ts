import { AxiosRequestHeaders } from "axios";

export interface Config {
  api: {
    newsUrl: string;
  };
}

export enum ApiVersion {
  news = "news",
}

export interface RequestOptions {
  apiVersion: ApiVersion;
  headers?: AxiosRequestHeaders;
  widthHeader?: boolean;
}

export interface JsonBody {
  [key: string]: any;
}

export interface RequestPayload {
  body?: JsonBody | FormData;
  params?: Object;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}
