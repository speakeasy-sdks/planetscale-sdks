package operations

type RenewABranchPasswordPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type RenewABranchPasswordRequestBody struct {
	ReadOnlyRegionID *string `json:"read_only_region_id,omitempty"`
}

type RenewABranchPasswordRequest struct {
	PathParams RenewABranchPasswordPathParams
	Request    *RenewABranchPasswordRequestBody `request:"mediaType=application/json"`
}

type RenewABranchPasswordResponse struct {
	ContentType                                  string
	StatusCode                                   int
	RenewABranchPassword200ApplicationJSONObject map[string]map[string]interface{}
}
