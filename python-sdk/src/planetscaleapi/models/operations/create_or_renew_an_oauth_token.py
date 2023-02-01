import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class CreateOrRenewAnOauthTokenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    
class CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclasses.dataclass
class CreateOrRenewAnOauthTokenRequestBody:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    

@dataclasses.dataclass
class CreateOrRenewAnOauthTokenRequest:
    path_params: CreateOrRenewAnOauthTokenPathParams = dataclasses.field()
    request: Optional[CreateOrRenewAnOauthTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrRenewAnOauthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_or_renew_an_oauth_token_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
