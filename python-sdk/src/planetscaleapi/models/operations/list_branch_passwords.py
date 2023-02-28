from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class ListBranchPasswordsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBranchPasswordsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    read_only_region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'read_only_region_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBranchPasswordsRequest:
    path_params: ListBranchPasswordsPathParams = dataclasses.field()
    query_params: ListBranchPasswordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListBranchPasswordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_branch_passwords_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    