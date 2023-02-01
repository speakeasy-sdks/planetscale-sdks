import requests
from typing import Any,Optional
from planetscaleapi.models import operations
from . import utils

class OAuthApplications:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_an_oauth_token(self, request: operations.DeleteAnOauthTokenRequest) -> operations.DeleteAnOauthTokenResponse:
        r"""Delete an OAuth token
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `delete_oauth_tokens`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications/{application_id}/tokens/{token_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnOauthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_an_oauth_application(self, request: operations.GetAnOauthApplicationRequest) -> operations.GetAnOauthApplicationResponse:
        r"""Get an OAuth application
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_oauth_applications`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications/{application_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnOauthApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_an_oauth_application_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_an_oauth_token(self, request: operations.GetAnOauthTokenRequest) -> operations.GetAnOauthTokenResponse:
        r"""Get an OAuth token
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_oauth_tokens`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications/{application_id}/tokens/{token_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnOauthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_an_oauth_token_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_oauth_applications(self, request: operations.ListOauthApplicationsRequest) -> operations.ListOauthApplicationsResponse:
        r"""List OAuth applications
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_oauth_applications`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOauthApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_oauth_applications_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_oauth_tokens(self, request: operations.ListOauthTokensRequest) -> operations.ListOauthTokensResponse:
        r"""List OAuth tokens
        
        <p>List OAuth tokens created by an OAuth application</p>
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_oauth_tokens`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications/{application_id}/tokens", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOauthTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_oauth_tokens_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    