from __future__ import annotations
import dataclasses



@dataclasses.dataclass
class DeleteAnOauthTokenPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    token_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAnOauthTokenRequest:
    path_params: DeleteAnOauthTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAnOauthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    