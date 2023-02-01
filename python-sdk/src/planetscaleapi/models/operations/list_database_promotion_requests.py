import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListDatabasePromotionRequestsPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDatabasePromotionRequestsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDatabasePromotionRequestsRequest:
    path_params: ListDatabasePromotionRequestsPathParams = dataclasses.field()
    query_params: ListDatabasePromotionRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDatabasePromotionRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_database_promotion_requests_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
