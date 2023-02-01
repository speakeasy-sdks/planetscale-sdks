package operations

type CreateABranchPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateABranchRequestBody struct {
	BackupID     *string `json:"backup_id,omitempty"`
	Name         string  `json:"name"`
	ParentBranch string  `json:"parent_branch"`
}

type CreateABranchRequest struct {
	PathParams CreateABranchPathParams
	Request    *CreateABranchRequestBody `request:"mediaType=application/json"`
}

type CreateABranchResponse struct {
	ContentType                           string
	StatusCode                            int64
	CreateABranch201ApplicationJSONObject map[string]map[string]interface{}
}
