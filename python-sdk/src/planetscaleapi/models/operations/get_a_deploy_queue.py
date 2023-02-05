import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class GetADeployQueuePathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetADeployQueueRequest:
    path_params: GetADeployQueuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetADeployQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_a_deploy_queue_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    