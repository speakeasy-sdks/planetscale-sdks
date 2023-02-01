import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAnOauthApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnOauthApplicationRequest:
    path_params: GetAnOauthApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnOauthApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_an_oauth_application_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
