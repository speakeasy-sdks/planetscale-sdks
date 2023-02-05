import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class GetAnOauthTokenPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    token_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnOauthTokenRequest:
    path_params: GetAnOauthTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnOauthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_an_oauth_token_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    