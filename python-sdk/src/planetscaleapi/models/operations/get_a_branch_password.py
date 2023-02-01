import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetABranchPasswordPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetABranchPasswordQueryParams:
    read_only_region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'read_only_region_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetABranchPasswordRequest:
    path_params: GetABranchPasswordPathParams = dataclasses.field()
    query_params: GetABranchPasswordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetABranchPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_a_branch_password_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
