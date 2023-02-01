import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Databases {
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
   * createADatabase - Create a database
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `create_databases`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `create_databases` |
  **/
  createADatabase(
    req: operations.CreateADatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateADatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateADatabaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases", req.pathParams);

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
        const res: operations.CreateADatabaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createADatabase201ApplicationJSONObject = httpRes?.data;
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
   * deleteADatabase - Delete a database
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `delete_database`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `delete_databases` |
   * | Database | `delete_database` |
  **/
  deleteADatabase(
    req: operations.DeleteADatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteADatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteADatabaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteADatabaseResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getADatabase - Get a database
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_databases` |
   * | Database | `read_database` |
  **/
  getADatabase(
    req: operations.GetADatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetADatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetADatabaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetADatabaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getADatabase200ApplicationJSONObject = httpRes?.data;
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
   * listDatabasePromotionRequests - List database promotion requests
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_databases` |
   * | Database | `read_database` |
  **/
  listDatabasePromotionRequests(
    req: operations.ListDatabasePromotionRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabasePromotionRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabasePromotionRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}/promotion-requests", req.pathParams);
    
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
        const res: operations.ListDatabasePromotionRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDatabasePromotionRequests200ApplicationJSONObject = httpRes?.data;
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
   * listDatabaseRegions - List database regions
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_databases` |
   * | Database | `read_database` |
  **/
  listDatabaseRegions(
    req: operations.ListDatabaseRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabaseRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabaseRegionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}/regions", req.pathParams);
    
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
        const res: operations.ListDatabaseRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDatabaseRegions200ApplicationJSONObject = httpRes?.data;
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
   * listDatabases - List databases
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_databases` |
  **/
  listDatabases(
    req: operations.ListDatabasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases", req.pathParams);
    
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
        const res: operations.ListDatabasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDatabases200ApplicationJSONObject = httpRes?.data;
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
   * listReadOnlyRegions - List read-only regions
   *
   * 
   * <p>List read-only regions for the database’s default branch</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_branches` |
   * | Database | `read_branches` |
  **/
  listReadOnlyRegions(
    req: operations.ListReadOnlyRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListReadOnlyRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListReadOnlyRegionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}/read-only-regions", req.pathParams);
    
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
        const res: operations.ListReadOnlyRegionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listReadOnlyRegions200ApplicationJSONObject = httpRes?.data;
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
   * updateDatabaseSettings - Update database settings
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `write_database`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `write_databases` |
   * | Database | `write_database` |
  **/
  updateDatabaseSettings(
    req: operations.UpdateDatabaseSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDatabaseSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDatabaseSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{name}", req.pathParams);

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
        const res: operations.UpdateDatabaseSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateDatabaseSettings200ApplicationJSONObject = httpRes?.data;
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
