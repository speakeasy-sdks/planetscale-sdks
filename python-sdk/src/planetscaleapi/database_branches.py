import requests
from typing import Any,Optional
from planetscaleapi.models import operations
from . import utils

class DatabaseBranches:
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

    
    def cancel_or_deny_a_demotion_request(self, request: operations.CancelOrDenyADemotionRequestRequest) -> operations.CancelOrDenyADemotionRequestResponse:
        r"""Cancel or deny a demotion request
        
        <p>Cancels or denies a demotion request for a database branch</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `demote_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `demote_branches` |
        | Database | `demote_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/demotion-request", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelOrDenyADemotionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_a_branch(self, request: operations.CreateABranchRequest) -> operations.CreateABranchResponse:
        r"""Create a branch
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `create_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `write_branches` |
        | Database | `write_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateABranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_a_branch_201_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_a_promotion_request(self, request: operations.CreateAPromotionRequestRequest) -> operations.CreateAPromotionRequestResponse:
        r"""Create a promotion request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_production_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `promote_branches` |
        | Database | `promote_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/promotion-request", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPromotionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_a_promotion_request_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_a_branch(self, request: operations.DeleteABranchRequest) -> operations.DeleteABranchResponse:
        r"""Delete a branch
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `delete_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `delete_branches`, `delete_production_branches` |
        | Database | `delete_branches`, `delete_production_branches` |
        | Branch | `delete_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteABranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def demote_a_branch(self, request: operations.DemoteABranchRequest) -> operations.DemoteABranchResponse:
        r"""Demote a branch
        
        <p>Demote a branch from production to development</p>
        
        ### Authorization
        A   OAuth token must have the following   scopes in order to use this API endpoint:
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `demote_branches` |
        | Database | `demote_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/demote", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DemoteABranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.demote_a_branch_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_branch(self, request: operations.GetABranchRequest) -> operations.GetABranchResponse:
        r"""Get a branch
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        | Branch | `read_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_branch_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_branch_schema(self, request: operations.GetABranchSchemaRequest) -> operations.GetABranchSchemaResponse:
        r"""Get a branch schema
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        | Branch | `read_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/schema", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABranchSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_branch_schema_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_demotion_request(self, request: operations.GetADemotionRequestRequest) -> operations.GetADemotionRequestResponse:
        r"""Get a demotion request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_branch`, `read_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        | Branch | `read_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/demotion-request", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetADemotionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_demotion_request_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_promotion_request(self, request: operations.GetAPromotionRequestRequest) -> operations.GetAPromotionRequestResponse:
        r"""Get a promotion request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `connect_production_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `promote_branches` |
        | Database | `promote_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/promotion-request", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPromotionRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_promotion_request_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_branch_status(self, request: operations.GetBranchStatusRequest) -> operations.GetBranchStatusResponse:
        r"""Get branch status
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        | Branch | `read_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches/{name}/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBranchStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_branch_status_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_branches(self, request: operations.ListBranchesRequest) -> operations.ListBranchesResponse:
        r"""List branches
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_branch`, `delete_branch`, `create_branch`, `connect_production_branch`, `connect_branch`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        | Branch | `read_branch` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/branches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBranchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_branches_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    