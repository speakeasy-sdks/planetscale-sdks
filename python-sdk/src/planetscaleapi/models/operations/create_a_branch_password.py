import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class CreateABranchPasswordPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    
class CreateABranchPasswordRequestBodyRoleEnum(str, Enum):
    READER = "reader"
    WRITER = "writer"
    ADMIN = "admin"
    READWRITER = "readwriter"


@dataclass_json
@dataclasses.dataclass
class CreateABranchPasswordRequestBody:
    read_only_region_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only_region_id') }})
    role: Optional[CreateABranchPasswordRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    ttl: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

@dataclasses.dataclass
class CreateABranchPasswordRequest:
    path_params: CreateABranchPasswordPathParams = dataclasses.field()
    request: Optional[CreateABranchPasswordRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateABranchPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_a_branch_password_201_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
