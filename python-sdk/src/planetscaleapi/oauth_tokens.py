import requests
from . import utils
from planetscaleapi.models import operations
from typing import Optional

class OAuthTokens:
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

    
    def create_or_renew_an_oauth_token(self, request: operations.CreateOrRenewAnOauthTokenRequest) -> operations.CreateOrRenewAnOauthTokenResponse:
        r"""Create or renew an OAuth token
        
        <p>Create an OAuth token from an authorization grant code, or refresh an OAuth token from a refresh token</p>
        
        ### Authorization
        A service token   must have the following access   in order to use this API endpoint:
        
        **Service Token Accesses**
         `write_oauth_tokens`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/oauth-applications/{id}/token", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrRenewAnOauthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_or_renew_an_oauth_token_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    