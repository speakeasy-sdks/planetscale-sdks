import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListBranchesPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBranchesQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBranchesRequest:
    path_params: ListBranchesPathParams = dataclasses.field()
    query_params: ListBranchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListBranchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_branches_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    