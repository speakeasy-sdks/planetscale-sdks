import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListReadOnlyRegionsPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListReadOnlyRegionsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListReadOnlyRegionsRequest:
    path_params: ListReadOnlyRegionsPathParams = dataclasses.field()
    query_params: ListReadOnlyRegionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListReadOnlyRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_read_only_regions_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
