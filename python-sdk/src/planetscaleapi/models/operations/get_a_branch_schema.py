import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class GetABranchSchemaPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetABranchSchemaQueryParams:
    keyspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyspace', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetABranchSchemaRequest:
    path_params: GetABranchSchemaPathParams = dataclasses.field()
    query_params: GetABranchSchemaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetABranchSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_a_branch_schema_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    