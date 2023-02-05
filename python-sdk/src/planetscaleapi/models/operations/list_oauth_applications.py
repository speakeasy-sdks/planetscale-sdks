import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListOauthApplicationsPathParams:
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOauthApplicationsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOauthApplicationsRequest:
    path_params: ListOauthApplicationsPathParams = dataclasses.field()
    query_params: ListOauthApplicationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListOauthApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_oauth_applications_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    