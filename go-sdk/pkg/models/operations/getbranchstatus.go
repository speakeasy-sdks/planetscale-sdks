package operations

type GetBranchStatusPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetBranchStatusRequest struct {
	PathParams GetBranchStatusPathParams
}

type GetBranchStatusResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetBranchStatus200ApplicationJSONObject map[string]map[string]interface{}
}
