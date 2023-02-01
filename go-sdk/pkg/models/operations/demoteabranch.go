package operations

type DemoteABranchPathParams struct {
	Database     float64 `pathParam:"style=simple,explode=false,name=database"`
	Name         float64 `pathParam:"style=simple,explode=false,name=name"`
	Organization float64 `pathParam:"style=simple,explode=false,name=organization"`
}

type DemoteABranchRequest struct {
	PathParams DemoteABranchPathParams
}

type DemoteABranchResponse struct {
	ContentType                           string
	StatusCode                            int64
	DemoteABranch200ApplicationJSONObject map[string]map[string]interface{}
}
