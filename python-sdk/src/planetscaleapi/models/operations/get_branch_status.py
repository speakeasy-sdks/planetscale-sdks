import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetBranchStatusPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBranchStatusRequest:
    path_params: GetBranchStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBranchStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_branch_status_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
