import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class OAuthTokens {
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
   * createOrRenewAnOauthToken - Create or renew an OAuth token
   *
   * 
   * <p>Create an OAuth token from an authorization grant code, or refresh an OAuth token from a refresh token</p>
   * 
   * ### Authorization
   * A service token   must have the following access   in order to use this API endpoint:
   * 
   * **Service Token Accesses**
   *  `write_oauth_tokens`
   * 
   * 
  **/
  createOrRenewAnOauthToken(
    req: operations.CreateOrRenewAnOauthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrRenewAnOauthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrRenewAnOauthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/organizations/{organization}/oauth-applications/{id}/token", req.pathParams);

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
        const res: operations.CreateOrRenewAnOauthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createOrRenewAnOauthToken200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
