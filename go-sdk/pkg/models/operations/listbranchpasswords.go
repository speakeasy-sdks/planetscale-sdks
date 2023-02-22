package operations

type ListBranchPasswordsPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListBranchPasswordsQueryParams struct {
	Page             *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64 `queryParam:"style=form,explode=true,name=per_page"`
	ReadOnlyRegionID *string  `queryParam:"style=form,explode=true,name=read_only_region_id"`
}

type ListBranchPasswordsRequest struct {
	PathParams  ListBranchPasswordsPathParams
	QueryParams ListBranchPasswordsQueryParams
}

type ListBranchPasswordsResponse struct {
	ContentType                                 string
	StatusCode                                  int
	ListBranchPasswords200ApplicationJSONObject map[string]map[string]interface{}
}
