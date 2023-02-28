package operations

type GetABranchPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetABranchRequest struct {
	PathParams GetABranchPathParams
}

type GetABranchResponse struct {
	ContentType                        string
	StatusCode                         int
	GetABranch200ApplicationJSONObject map[string]map[string]interface{}
}
