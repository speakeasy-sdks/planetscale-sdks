import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class DemoteABranchPathParams:
    database: float = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    name: float = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: float = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DemoteABranchRequest:
    path_params: DemoteABranchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DemoteABranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    demote_a_branch_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    