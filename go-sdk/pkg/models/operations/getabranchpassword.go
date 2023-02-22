package operations

type GetABranchPasswordPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetABranchPasswordQueryParams struct {
	ReadOnlyRegionID *string `queryParam:"style=form,explode=true,name=read_only_region_id"`
}

type GetABranchPasswordRequest struct {
	PathParams  GetABranchPasswordPathParams
	QueryParams GetABranchPasswordQueryParams
}

type GetABranchPasswordResponse struct {
	ContentType                                string
	StatusCode                                 int
	GetABranchPassword200ApplicationJSONObject map[string]map[string]interface{}
}
