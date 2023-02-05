import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListDatabasesPathParams:
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDatabasesQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDatabasesRequest:
    path_params: ListDatabasesPathParams = dataclasses.field()
    query_params: ListDatabasesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDatabasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_databases_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    