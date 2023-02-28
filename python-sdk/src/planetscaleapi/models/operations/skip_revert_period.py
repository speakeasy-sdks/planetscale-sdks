from __future__ import annotations
import dataclasses
from typing import Any, Optional


@dataclasses.dataclass
class SkipRevertPeriodPathParams:
    database: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SkipRevertPeriodRequest:
    path_params: SkipRevertPeriodPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SkipRevertPeriodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    skip_revert_period_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    