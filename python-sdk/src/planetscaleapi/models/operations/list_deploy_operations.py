import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListDeployOperationsPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeployOperationsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDeployOperationsRequest:
    path_params: ListDeployOperationsPathParams = dataclasses.field()
    query_params: ListDeployOperationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDeployOperationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_deploy_operations_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    