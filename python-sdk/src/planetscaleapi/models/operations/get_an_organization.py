from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class GetAnOrganizationPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnOrganizationRequest:
    path_params: GetAnOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_an_organization_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    