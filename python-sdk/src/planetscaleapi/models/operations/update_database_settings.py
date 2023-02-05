import dataclasses
from dataclasses_json import dataclass_json
from planetscaleapi import utils
from typing import Any, Optional


@dataclasses.dataclass
class UpdateDatabaseSettingsPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    organization: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDatabaseSettingsRequestBody:
    allow_data_branching: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_data_branching') }})
    automatic_migrations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic_migrations') }})
    default_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    insights_raw_queries: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights_raw_queries') }})
    migration_framework: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migration_framework') }})
    migration_table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migration_table_name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    production_branch_web_console: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production_branch_web_console') }})
    require_approval_for_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_approval_for_deploy') }})
    restrict_branch_region: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrict_branch_region') }})
    

@dataclasses.dataclass
class UpdateDatabaseSettingsRequest:
    path_params: UpdateDatabaseSettingsPathParams = dataclasses.field()
    request: Optional[UpdateDatabaseSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDatabaseSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_database_settings_200_application_json_object: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    