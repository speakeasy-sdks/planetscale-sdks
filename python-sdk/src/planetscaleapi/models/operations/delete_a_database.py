from __future__ import annotations
import dataclasses



@dataclasses.dataclass
class DeleteADatabasePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteADatabaseRequest:
    path_params: DeleteADatabasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteADatabaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    