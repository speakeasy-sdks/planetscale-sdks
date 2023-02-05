import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListOauthTokensPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOauthTokensQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOauthTokensRequest:
    path_params: ListOauthTokensPathParams = dataclasses.field()
    query_params: ListOauthTokensQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListOauthTokensResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_oauth_tokens_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    