import dataclasses



@dataclasses.dataclass
class DeleteABranchPasswordPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteABranchPasswordRequest:
    path_params: DeleteABranchPasswordPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteABranchPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
