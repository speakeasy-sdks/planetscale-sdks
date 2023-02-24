from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from planetscaleapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class CreateADeployRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateADeployRequestRequestBody:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch'), 'exclude': lambda f: f is None }})
    into_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('into_branch'), 'exclude': lambda f: f is None }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes'), 'exclude': lambda f: f is None }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number'), 'exclude': lambda f: f is None }})
    

@dataclasses.dataclass
class CreateADeployRequestRequest:
    path_params: CreateADeployRequestPathParams = dataclasses.field()
    request: Optional[CreateADeployRequestRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateADeployRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_a_deploy_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    