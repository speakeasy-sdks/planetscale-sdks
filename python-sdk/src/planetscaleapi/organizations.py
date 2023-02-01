import requests
from typing import Any,Optional
from planetscaleapi.models import operations
from . import utils

class Organizations:
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

    
    def get_an_organization(self, request: operations.GetAnOrganizationRequest) -> operations.GetAnOrganizationResponse:
        r"""Get an organization
        
        ### Authorization
        A   OAuth token must have the following   scopes in order to use this API endpoint:
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | User | `read_organizations` |
        | Organization | `read_organization` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_an_organization_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_organizations(self, request: operations.ListOrganizationsRequest) -> operations.ListOrganizationsResponse:
        r"""List organizations
        
        ### Authorization
        A   OAuth token must have the following   scopes in order to use this API endpoint:
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | User | `read_organizations` |
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_organizations_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_regions_for_an_organization(self, request: operations.ListRegionsForAnOrganizationRequest) -> operations.ListRegionsForAnOrganizationResponse:
        r"""List regions for an organization
        
        ### Authorization
        A   OAuth token must have the following   scopes in order to use this API endpoint:
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | User | `read_organizations` |
        | Organization | `read_organization` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{name}/region", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRegionsForAnOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_regions_for_an_organization_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_an_organization(self, request: operations.UpdateAnOrganizationRequest) -> operations.UpdateAnOrganizationResponse:
        r"""Update an organization
        
        ### Authorization
        A   OAuth token must have the following   scopes in order to use this API endpoint:
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `write_organization` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAnOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.update_an_organization_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    