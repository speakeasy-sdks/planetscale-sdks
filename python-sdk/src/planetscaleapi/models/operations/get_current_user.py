import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCurrentUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_current_user_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
