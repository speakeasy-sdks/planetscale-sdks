from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListRegionsForAnOrganizationPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRegionsForAnOrganizationQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRegionsForAnOrganizationRequest:
    path_params: ListRegionsForAnOrganizationPathParams = dataclasses.field()
    query_params: ListRegionsForAnOrganizationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListRegionsForAnOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_regions_for_an_organization_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    