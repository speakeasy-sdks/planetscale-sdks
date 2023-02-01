import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from planetscaleapi import utils


@dataclasses.dataclass
class UpdateAnOrganizationPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAnOrganizationRequestBody:
    billing_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_email') }})
    require_admin_for_production_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_admin_for_production_access') }})
    

@dataclasses.dataclass
class UpdateAnOrganizationRequest:
    path_params: UpdateAnOrganizationPathParams = dataclasses.field()
    request: Optional[UpdateAnOrganizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAnOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_an_organization_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
