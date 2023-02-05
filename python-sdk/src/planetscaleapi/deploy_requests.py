import requests
from . import utils
from planetscaleapi.models import operations
from typing import Optional

class DeployRequests:
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

    
    def cancel_a_queued_deploy_request(self, request: operations.CancelAQueuedDeployRequestRequest) -> operations.CancelAQueuedDeployRequestResponse:
        r"""Cancel a queued deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelAQueuedDeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.cancel_a_queued_deploy_request_200_application_json_object = out

        return res

    
    def close_a_deploy_request(self, request: operations.CloseADeployRequestRequest) -> operations.CloseADeployRequestResponse:
        r"""Close a deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `write_deploy_requests` |
        | Database | `write_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloseADeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.close_a_deploy_request_200_application_json_object = out

        return res

    
    def complete_a_gated_deploy_request(self, request: operations.CompleteAGatedDeployRequestRequest) -> operations.CompleteAGatedDeployRequestResponse:
        r"""Complete a gated deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/apply-deploy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteAGatedDeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.complete_a_gated_deploy_request_200_application_json_object = out

        return res

    
    def complete_a_revert(self, request: operations.CompleteARevertRequest) -> operations.CompleteARevertResponse:
        r"""Complete a revert
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/revert", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteARevertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.complete_a_revert_200_application_json_object = out

        return res

    
    def complete_an_errored_deploy(self, request: operations.CompleteAnErroredDeployRequest) -> operations.CompleteAnErroredDeployResponse:
        r"""Complete an errored deploy
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/complete-deploy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteAnErroredDeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.complete_an_errored_deploy_200_application_json_object = out

        return res

    
    def create_a_deploy_request(self, request: operations.CreateADeployRequestRequest) -> operations.CreateADeployRequestResponse:
        r"""Create a deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_requests`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `write_deploy_requests` |
        | Database | `write_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateADeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.create_a_deploy_request_200_application_json_object = out

        return res

    
    def get_a_deploy_queue(self, request: operations.GetADeployQueueRequest) -> operations.GetADeployQueueResponse:
        r"""Get a deploy queue
        
        <p>Get the deploy queue for a database</p>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-queue", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetADeployQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_deploy_queue_200_application_json_object = out

        return res

    
    def get_a_deploy_request(self, request: operations.GetADeployRequestRequest) -> operations.GetADeployRequestResponse:
        r"""Get a deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_deploy_requests` |
        | Database | `read_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetADeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_deploy_request_200_application_json_object = out

        return res

    
    def get_a_deployment(self, request: operations.GetADeploymentRequest) -> operations.GetADeploymentResponse:
        r"""Get a deployment
        
        <p>Get the deployment for a deploy request</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_deploy_requests` |
        | Database | `read_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deployment", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetADeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.get_a_deployment_200_application_json_object = out

        return res

    
    def list_deploy_operations(self, request: operations.ListDeployOperationsRequest) -> operations.ListDeployOperationsResponse:
        r"""List deploy operations
        
        <p>List deploy operations for a deploy request</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_deploy_requests` |
        | Database | `read_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployOperationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_deploy_operations_200_application_json_object = out

        return res

    
    def list_deploy_requests(self, request: operations.ListDeployRequestsRequest) -> operations.ListDeployRequestsResponse:
        r"""List deploy requests
        
        <p>List deploy requests for a database</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `read_deploy_requests` |
        | Database | `read_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.list_deploy_requests_200_application_json_object = out

        return res

    
    def queue_a_deploy_request(self, request: operations.QueueADeployRequestRequest) -> operations.QueueADeployRequestResponse:
        r"""Queue a deploy request
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deploy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QueueADeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.queue_a_deploy_request_200_application_json_object = out

        return res

    
    def skip_revert_period(self, request: operations.SkipRevertPeriodRequest) -> operations.SkipRevertPeriodResponse:
        r"""Skip revert period
        
        <p>Skips the revert period for a deploy request</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/skip-revert", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SkipRevertPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.skip_revert_period_200_application_json_object = out

        return res

    
    def update_auto_apply_for_deploy_request(self, request: operations.UpdateAutoApplyForDeployRequestRequest) -> operations.UpdateAutoApplyForDeployRequestResponse:
        r"""Update auto-apply for deploy request
        
        <p>Enables or disabled the auto-apply setting for a deploy request</p>
        
        ### Authorization
        A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
        
        **Service Token Accesses**
         `read_deploy_request`, `create_deploy_request`
        
        **OAuth Scopes**
        
         | Resource | Scopes |
        | :------- | :---------- |
        | Organization | `deploy_deploy_requests` |
        | Database | `deploy_deploy_requests` |
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/auto-apply", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAutoApplyForDeployRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.update_auto_apply_for_deploy_request_200_application_json_object = out

        return res

    