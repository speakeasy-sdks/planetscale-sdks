import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class CreateABranchPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateABranchRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_branch: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_branch') }})
    backup_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_id') }})
    

@dataclasses.dataclass
class CreateABranchRequest:
    path_params: CreateABranchPathParams = dataclasses.field()
    request: Optional[CreateABranchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateABranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_a_branch_201_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
