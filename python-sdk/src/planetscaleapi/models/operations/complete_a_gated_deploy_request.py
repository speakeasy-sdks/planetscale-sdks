import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class CompleteAGatedDeployRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompleteAGatedDeployRequestRequest:
    path_params: CompleteAGatedDeployRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompleteAGatedDeployRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_a_gated_deploy_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    