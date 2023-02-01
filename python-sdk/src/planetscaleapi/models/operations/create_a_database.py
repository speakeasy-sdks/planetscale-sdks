import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class CreateADatabasePathParams:
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateADatabaseRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    

@dataclasses.dataclass
class CreateADatabaseRequest:
    path_params: CreateADatabasePathParams = dataclasses.field()
    request: Optional[CreateADatabaseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateADatabaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_a_database_201_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
