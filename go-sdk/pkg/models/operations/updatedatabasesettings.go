package operations

type UpdateDatabaseSettingsPathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type UpdateDatabaseSettingsRequestBody struct {
	AllowDataBranching         *bool   `json:"allow_data_branching,omitempty"`
	AutomaticMigrations        *bool   `json:"automatic_migrations,omitempty"`
	DefaultBranch              *string `json:"default_branch,omitempty"`
	InsightsRawQueries         *bool   `json:"insights_raw_queries,omitempty"`
	MigrationFramework         *string `json:"migration_framework,omitempty"`
	MigrationTableName         *string `json:"migration_table_name,omitempty"`
	Notes                      *string `json:"notes,omitempty"`
	ProductionBranchWebConsole *bool   `json:"production_branch_web_console,omitempty"`
	RequireApprovalForDeploy   *bool   `json:"require_approval_for_deploy,omitempty"`
	RestrictBranchRegion       *bool   `json:"restrict_branch_region,omitempty"`
}

type UpdateDatabaseSettingsRequest struct {
	PathParams UpdateDatabaseSettingsPathParams
	Request    *UpdateDatabaseSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateDatabaseSettingsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateDatabaseSettings200ApplicationJSONObject map[string]map[string]interface{}
}
