from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class QueueADeployRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QueueADeployRequestRequest:
    path_params: QueueADeployRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class QueueADeployRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    queue_a_deploy_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    