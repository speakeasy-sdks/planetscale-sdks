import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetADatabasePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetADatabaseRequest:
    path_params: GetADatabasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetADatabaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_a_database_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
