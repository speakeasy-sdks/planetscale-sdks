import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class UpdateAutoApplyForDeployRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAutoApplyForDeployRequestRequest:
    path_params: UpdateAutoApplyForDeployRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAutoApplyForDeployRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_auto_apply_for_deploy_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    