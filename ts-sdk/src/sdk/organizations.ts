import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Organizations {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getAnOrganization - Get an organization
   *
   * 
   * ### Authorization
   * A OAuth token must have the following scopes in order to use this API endpoint:
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | User | `read_organizations` |
   * | Organization | `read_organization` |
  **/
  getAnOrganization(
    req: operations.GetAnOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAnOrganization200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * listOrganizations - List organizations
   *
   * 
   * ### Authorization
   * A   OAuth token must have the following   scopes in order to use this API endpoint:
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | User | `read_organizations` |
  **/
  listOrganizations(
    req: operations.ListOrganizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOrganizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOrganizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/organizations";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listOrganizations200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * listRegionsForAnOrganization - List regions for an organization
   *
   * 
   * ### Authorization
   * A   OAuth token must have the following   scopes in order to use this API endpoint:
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | User | `read_organizations` |
   * | Organization | `read_organization` |
  **/
  listRegionsForAnOrganization(
    req: operations.ListRegionsForAnOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRegionsForAnOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRegionsForAnOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{name}/region", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListRegionsForAnOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRegionsForAnOrganization200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * updateAnOrganization - Update an organization
   *
   * 
   * ### Authorization
   * A   OAuth token must have the following   scopes in order to use this API endpoint:
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `write_organization` |
  **/
  updateAnOrganization(
    req: operations.UpdateAnOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAnOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAnOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateAnOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateAnOrganization200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
