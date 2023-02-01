import requests
from typing import Any,Optional
from planetscaleapi.models import operations
from . import utils

class Databases:
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

    
    def create_a_database(self, request: operations.CreateADatabaseRequest) -> operations.CreateADatabaseResponse:
        r"""Create a database
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `create_databases`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `create_databases` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_a_database_201_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_a_database(self, request: operations.DeleteADatabaseRequest) -> operations.DeleteADatabaseResponse:
        r"""Delete a database
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `delete_database`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `delete_databases` |
        | Database | `delete_database` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_database(self, request: operations.GetADatabaseRequest) -> operations.GetADatabaseResponse:
        r"""Get a database
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_databases` |
        | Database | `read_database` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_database_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_database_promotion_requests(self, request: operations.ListDatabasePromotionRequestsRequest) -> operations.ListDatabasePromotionRequestsResponse:
        r"""List database promotion requests
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_databases` |
        | Database | `read_database` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}/promotion-requests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDatabasePromotionRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_database_promotion_requests_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_database_regions(self, request: operations.ListDatabaseRegionsRequest) -> operations.ListDatabaseRegionsResponse:
        r"""List database regions
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_databases` |
        | Database | `read_database` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}/regions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDatabaseRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_database_regions_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_databases(self, request: operations.ListDatabasesRequest) -> operations.ListDatabasesResponse:
        r"""List databases
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_databases` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDatabasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_databases_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_read_only_regions(self, request: operations.ListReadOnlyRegionsRequest) -> operations.ListReadOnlyRegionsResponse:
        r"""List read-only regions
        
        <p>List read-only regions for the database’s default branch</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_database`, `delete_database`, `write_database`, `read_branch`, `delete_branch`, `create_branch`, `delete_production_branch`, `connect_branch`, `connect_production_branch`, `delete_branch_password`, `delete_production_branch_password`, `read_deploy_request`, `create_deploy_request`, `approve_deploy_request`, `read_comment`, `create_comment`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_branches` |
        | Database | `read_branches` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}/read-only-regions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListReadOnlyRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_read_only_regions_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_database_settings(self, request: operations.UpdateDatabaseSettingsRequest) -> operations.UpdateDatabaseSettingsResponse:
        r"""Update database settings
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `write_database`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `write_databases` |
        | Database | `write_database` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDatabaseSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.update_database_settings_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    