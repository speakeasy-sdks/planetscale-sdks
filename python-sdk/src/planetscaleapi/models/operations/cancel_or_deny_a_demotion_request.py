import dataclasses



@dataclasses.dataclass
class CancelOrDenyADemotionRequestPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelOrDenyADemotionRequestRequest:
    path_params: CancelOrDenyADemotionRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CancelOrDenyADemotionRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    