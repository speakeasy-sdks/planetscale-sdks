import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListDatabaseRegionsPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDatabaseRegionsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDatabaseRegionsRequest:
    path_params: ListDatabaseRegionsPathParams = dataclasses.field()
    query_params: ListDatabaseRegionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDatabaseRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_database_regions_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
