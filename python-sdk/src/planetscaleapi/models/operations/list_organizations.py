import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListOrganizationsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOrganizationsRequest:
    query_params: ListOrganizationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListOrganizationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_organizations_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
