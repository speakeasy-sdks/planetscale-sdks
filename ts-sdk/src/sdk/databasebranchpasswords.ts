import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class DatabaseBranchPasswords {
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
   * createABranchPassword - Create a branch password
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_production_branch`, `create_branch_password`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords` |
   * | Database | `manage_passwords` |
   * | Branch | `manage_passwords` |
  **/
  createABranchPassword(
    req: operations.CreateABranchPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateABranchPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateABranchPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords", req.pathParams);

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateABranchPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createABranchPassword201ApplicationJSONObject = httpRes?.data;
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
   * deleteABranchPassword - Delete a branch password
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `delete_production_branch_password`, `delete_branch_password`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords`, `manage_production_branch_passwords` |
   * | Database | `manage_passwords`, `manage_production_branch_passwords` |
   * | Branch | `manage_passwords` |
  **/
  deleteABranchPassword(
    req: operations.DeleteABranchPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteABranchPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteABranchPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteABranchPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getABranchPassword - Get a branch password
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords` |
   * | Database | `manage_passwords` |
   * | Branch | `manage_passwords` |
  **/
  getABranchPassword(
    req: operations.GetABranchPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetABranchPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetABranchPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", req.pathParams);
    
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
        const res: operations.GetABranchPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getABranchPassword200ApplicationJSONObject = httpRes?.data;
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
   * listBranchPasswords - List branch passwords
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords` |
   * | Database | `manage_passwords` |
   * | Branch | `manage_passwords` |
  **/
  listBranchPasswords(
    req: operations.ListBranchPasswordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBranchPasswordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBranchPasswordsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords", req.pathParams);
    
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
        const res: operations.ListBranchPasswordsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listBranchPasswords200ApplicationJSONObject = httpRes?.data;
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
   * renewABranchPassword - Renew a branch password
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_production_branch`, `create_branch_password`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords` |
   * | Database | `manage_passwords` |
   * | Branch | `manage_passwords` |
  **/
  renewABranchPassword(
    req: operations.RenewABranchPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenewABranchPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenewABranchPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}/renew", req.pathParams);

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RenewABranchPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.renewABranchPassword200ApplicationJSONObject = httpRes?.data;
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
   * updateABranchPassword - Update a branch password
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_production_branch`, `create_branch_password`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `manage_passwords` |
   * | Database | `manage_passwords` |
   * | Branch | `manage_passwords` |
  **/
  updateABranchPassword(
    req: operations.UpdateABranchPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateABranchPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateABranchPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", req.pathParams);

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
        const res: operations.UpdateABranchPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateABranchPassword200ApplicationJSONObject = httpRes?.data;
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
