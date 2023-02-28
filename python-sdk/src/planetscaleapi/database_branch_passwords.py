import requests
from . import utils
from planetscaleapi.models import operations
from typing import Optional

class DatabaseBranchPasswords:
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

    
    def create_a_branch_password(self, request: operations.CreateABranchPasswordRequest) -> operations.CreateABranchPasswordResponse:
        r"""Create a branch password
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_production_branch`, `create_branch_password`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords` |
        | Database | `manage_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateABranchPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_a_branch_password_201_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_a_branch_password(self, request: operations.DeleteABranchPasswordRequest) -> operations.DeleteABranchPasswordResponse:
        r"""Delete a branch password
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `delete_production_branch_password`, `delete_branch_password`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords`, `manage_production_branch_passwords` |
        | Database | `manage_passwords`, `manage_production_branch_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteABranchPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_branch_password(self, request: operations.GetABranchPasswordRequest) -> operations.GetABranchPasswordResponse:
        r"""Get a branch password
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords` |
        | Database | `manage_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABranchPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_branch_password_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_branch_passwords(self, request: operations.ListBranchPasswordsRequest) -> operations.ListBranchPasswordsResponse:
        r"""List branch passwords
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords` |
        | Database | `manage_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBranchPasswordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_branch_passwords_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def renew_a_branch_password(self, request: operations.RenewABranchPasswordRequest) -> operations.RenewABranchPasswordResponse:
        r"""Renew a branch password
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_production_branch`, `create_branch_password`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords` |
        | Database | `manage_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}/renew", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RenewABranchPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.renew_a_branch_password_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_a_branch_password(self, request: operations.UpdateABranchPasswordRequest) -> operations.UpdateABranchPasswordResponse:
        r"""Update a branch password
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_production_branch`, `create_branch_password`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `manage_passwords` |
        | Database | `manage_passwords` |
        | Branch | `manage_passwords` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateABranchPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.update_a_branch_password_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    