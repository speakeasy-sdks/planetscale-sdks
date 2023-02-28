from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListDeployRequestsPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeployRequestsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDeployRequestsRequest:
    path_params: ListDeployRequestsPathParams = dataclasses.field()
    query_params: ListDeployRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDeployRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_deploy_requests_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    