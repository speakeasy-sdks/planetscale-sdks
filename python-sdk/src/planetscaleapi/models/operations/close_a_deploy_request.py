import dataclasses
from dataclasses_json import dataclass_json
from enum import Enum
from planetscaleapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class CloseADeployRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    
class CloseADeployRequestRequestBodyStateEnum(str, Enum):
    CLOSED = "closed"


@dataclass_json
@dataclasses.dataclass
class CloseADeployRequestRequestBody:
    state: Optional[CloseADeployRequestRequestBodyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclasses.dataclass
class CloseADeployRequestRequest:
    path_params: CloseADeployRequestPathParams = dataclasses.field()
    request: Optional[CloseADeployRequestRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CloseADeployRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    close_a_deploy_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    