import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateAPromotionRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAPromotionRequestRequest:
    path_params: CreateAPromotionRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateAPromotionRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_a_promotion_request_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
