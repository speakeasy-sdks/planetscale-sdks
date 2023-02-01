package operations

type UpdateABranchPasswordPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type UpdateABranchPasswordRequestBody struct {
	DisplayName      string  `json:"display_name"`
	ReadOnlyRegionID *string `json:"read_only_region_id,omitempty"`
}

type UpdateABranchPasswordRequest struct {
	PathParams UpdateABranchPasswordPathParams
	Request    *UpdateABranchPasswordRequestBody `request:"mediaType=application/json"`
}

type UpdateABranchPasswordResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	UpdateABranchPassword200ApplicationJSONObject map[string]map[string]interface{}
}
