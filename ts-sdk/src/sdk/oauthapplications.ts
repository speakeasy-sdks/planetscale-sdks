import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class OAuthApplications {
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
   * deleteAnOauthToken - Delete an OAuth token
   *
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `delete_oauth_tokens`
   * 
   * 
  **/
  deleteAnOauthToken(
    req: operations.DeleteAnOauthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAnOauthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAnOauthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications/{application_id}/tokens/{token_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAnOauthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * getAnOauthApplication - Get an OAuth application
   *
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_oauth_applications`
   * 
   * 
  **/
  getAnOauthApplication(
    req: operations.GetAnOauthApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnOauthApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnOauthApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications/{application_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnOauthApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getAnOauthApplication200ApplicationJSONObject = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
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
   * getAnOauthToken - Get an OAuth token
   *
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_oauth_tokens`
   * 
   * 
  **/
  getAnOauthToken(
    req: operations.GetAnOauthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnOauthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnOauthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications/{application_id}/tokens/{token_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnOauthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getAnOauthToken200ApplicationJSONObject = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
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
   * listOauthApplications - List OAuth applications
   *
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_oauth_applications`
   * 
   * 
  **/
  listOauthApplications(
    req: operations.ListOauthApplicationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOauthApplicationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOauthApplicationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListOauthApplicationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listOauthApplications200ApplicationJSONObject = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
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
   * listOauthTokens - List OAuth tokens
   *
   * 
   * <p>List OAuth tokens created by an OAuth application</p>
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_oauth_tokens`
   * 
   * 
  **/
  listOauthTokens(
    req: operations.ListOauthTokensRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOauthTokensResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOauthTokensRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications/{application_id}/tokens", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListOauthTokensResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listOauthTokens200ApplicationJSONObject = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
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
