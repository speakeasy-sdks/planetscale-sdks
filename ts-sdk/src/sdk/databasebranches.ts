import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DatabaseBranches {
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
   * cancelOrDenyADemotionRequest - Cancel or deny a demotion request
   *
   * 
   * <p>Cancels or denies a demotion request for a database branch</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `demote_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `demote_branches` |
   * | Database | `demote_branches` |
  **/
  cancelOrDenyADemotionRequest(
    req: operations.CancelOrDenyADemotionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelOrDenyADemotionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelOrDenyADemotionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/demotion-request", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelOrDenyADemotionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * createABranch - Create a branch
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `create_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `write_branches` |
   * | Database | `write_branches` |
  **/
  createABranch(
    req: operations.CreateABranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateABranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateABranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches", req.pathParams);

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
        const res: operations.CreateABranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createABranch201ApplicationJSONObject = plainToInstance(
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
   * createAPromotionRequest - Create a promotion request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_production_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `promote_branches` |
   * | Database | `promote_branches` |
  **/
  createAPromotionRequest(
    req: operations.CreateAPromotionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAPromotionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAPromotionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/promotion-request", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateAPromotionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createAPromotionRequest200ApplicationJSONObject = plainToInstance(
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
   * deleteABranch - Delete a branch
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `delete_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `delete_branches`, `delete_production_branches` |
   * | Database | `delete_branches`, `delete_production_branches` |
   * | Branch | `delete_branch` |
  **/
  deleteABranch(
    req: operations.DeleteABranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteABranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteABranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteABranchResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * demoteABranch - Demote a branch
   *
   * 
   * <p>Demote a branch from production to development</p>
   * 
   * ### Authorization
   * A   OAuth token must have the following   scopes in order to use this API endpoint:
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `demote_branches` |
   * | Database | `demote_branches` |
  **/
  demoteABranch(
    req: operations.DemoteABranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DemoteABranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DemoteABranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/demote", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DemoteABranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.demoteABranch200ApplicationJSONObject = plainToInstance(
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
   * getABranch - Get a branch
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
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
   * | Branch | `read_branch` |
  **/
  getABranch(
    req: operations.GetABranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetABranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetABranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetABranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getABranch200ApplicationJSONObject = plainToInstance(
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
   * getABranchSchema - Get a branch schema
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
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
   * | Branch | `read_branch` |
  **/
  getABranchSchema(
    req: operations.GetABranchSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetABranchSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetABranchSchemaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/schema", req.pathParams);
    
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
        const res: operations.GetABranchSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getABranchSchema200ApplicationJSONObject = plainToInstance(
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
   * getADemotionRequest - Get a demotion request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_branch`, `read_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
   * | Branch | `read_branch` |
  **/
  getADemotionRequest(
    req: operations.GetADemotionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetADemotionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetADemotionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/demotion-request", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetADemotionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getADemotionRequest200ApplicationJSONObject = plainToInstance(
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
   * getAPromotionRequest - Get a promotion request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `connect_production_branch`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `promote_branches` |
   * | Database | `promote_branches` |
  **/
  getAPromotionRequest(
    req: operations.GetAPromotionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAPromotionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAPromotionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/promotion-request", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAPromotionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getAPromotionRequest200ApplicationJSONObject = plainToInstance(
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
   * getBranchStatus - Get branch status
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
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
   * | Branch | `read_branch` |
  **/
  getBranchStatus(
    req: operations.GetBranchStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBranchStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBranchStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches/{name}/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBranchStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getBranchStatus200ApplicationJSONObject = plainToInstance(
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
   * listBranches - List branches
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
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
   * | Branch | `read_branch` |
  **/
  listBranches(
    req: operations.ListBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBranchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/branches", req.pathParams);
    
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
        const res: operations.ListBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listBranches200ApplicationJSONObject = plainToInstance(
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
