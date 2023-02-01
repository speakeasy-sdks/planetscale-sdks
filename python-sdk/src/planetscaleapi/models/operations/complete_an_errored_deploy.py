import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CompleteAnErroredDeployPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompleteAnErroredDeployRequest:
    path_params: CompleteAnErroredDeployPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompleteAnErroredDeployResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_an_errored_deploy_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
