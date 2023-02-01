import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class DeployRequests {
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
   * cancelAQueuedDeployRequest - Cancel a queued deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  cancelAQueuedDeployRequest(
    req: operations.CancelAQueuedDeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelAQueuedDeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelAQueuedDeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelAQueuedDeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cancelAQueuedDeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * closeADeployRequest - Close a deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `write_deploy_requests` |
   * | Database | `write_deploy_requests` |
  **/
  closeADeployRequest(
    req: operations.CloseADeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloseADeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloseADeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", req.pathParams);

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
        const res: operations.CloseADeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.closeADeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * completeAGatedDeployRequest - Complete a gated deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  completeAGatedDeployRequest(
    req: operations.CompleteAGatedDeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteAGatedDeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteAGatedDeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/apply-deploy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompleteAGatedDeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.completeAGatedDeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * completeARevert - Complete a revert
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  completeARevert(
    req: operations.CompleteARevertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteARevertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteARevertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/revert", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompleteARevertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.completeARevert200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * completeAnErroredDeploy - Complete an errored deploy
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  completeAnErroredDeploy(
    req: operations.CompleteAnErroredDeployRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteAnErroredDeployResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteAnErroredDeployRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/complete-deploy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompleteAnErroredDeployResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.completeAnErroredDeploy200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createADeployRequest - Create a deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_requests`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `write_deploy_requests` |
   * | Database | `write_deploy_requests` |
  **/
  createADeployRequest(
    req: operations.CreateADeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateADeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateADeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests", req.pathParams);

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
        const res: operations.CreateADeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createADeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getADeployQueue - Get a deploy queue
   *
   * 
   * <p>Get the deploy queue for a database</p>
   * 
   * 
  **/
  getADeployQueue(
    req: operations.GetADeployQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetADeployQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetADeployQueueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-queue", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetADeployQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getADeployQueue200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getADeployRequest - Get a deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_deploy_requests` |
   * | Database | `read_deploy_requests` |
  **/
  getADeployRequest(
    req: operations.GetADeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetADeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetADeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetADeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getADeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getADeployment - Get a deployment
   *
   * 
   * <p>Get the deployment for a deploy request</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_deploy_requests` |
   * | Database | `read_deploy_requests` |
  **/
  getADeployment(
    req: operations.GetADeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetADeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetADeploymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deployment", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetADeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getADeployment200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listDeployOperations - List deploy operations
   *
   * 
   * <p>List deploy operations for a deploy request</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_deploy_requests` |
   * | Database | `read_deploy_requests` |
  **/
  listDeployOperations(
    req: operations.ListDeployOperationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployOperationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployOperationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/operations", req.pathParams);
    
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
        const res: operations.ListDeployOperationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDeployOperations200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listDeployRequests - List deploy requests
   *
   * 
   * <p>List deploy requests for a database</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `read_deploy_requests` |
   * | Database | `read_deploy_requests` |
  **/
  listDeployRequests(
    req: operations.ListDeployRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeployRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeployRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests", req.pathParams);
    
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
        const res: operations.ListDeployRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDeployRequests200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * queueADeployRequest - Queue a deploy request
   *
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  queueADeployRequest(
    req: operations.QueueADeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueueADeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueueADeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deploy", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.QueueADeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.queueADeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * skipRevertPeriod - Skip revert period
   *
   * 
   * <p>Skips the revert period for a deploy request</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  skipRevertPeriod(
    req: operations.SkipRevertPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SkipRevertPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SkipRevertPeriodRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/skip-revert", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SkipRevertPeriodResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.skipRevertPeriod200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateAutoApplyForDeployRequest - Update auto-apply for deploy request
   *
   * 
   * <p>Enables or disabled the auto-apply setting for a deploy request</p>
   * 
   * ### Authorization
   * A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `read_deploy_request`, `create_deploy_request`
   * 
   * **OAuth Scopes**
   * 
   *  | Resource | Scopes |
   * | :------- | :---------- |
   * | Organization | `deploy_deploy_requests` |
   * | Database | `deploy_deploy_requests` |
  **/
  updateAutoApplyForDeployRequest(
    req: operations.UpdateAutoApplyForDeployRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAutoApplyForDeployRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAutoApplyForDeployRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/auto-apply", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateAutoApplyForDeployRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateAutoApplyForDeployRequest200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
