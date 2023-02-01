import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class RenewABranchPasswordPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RenewABranchPasswordRequestBody:
    read_only_region_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only_region_id') }})
    

@dataclasses.dataclass
class RenewABranchPasswordRequest:
    path_params: RenewABranchPasswordPathParams = dataclasses.field()
    request: Optional[RenewABranchPasswordRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RenewABranchPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    renew_a_branch_password_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
