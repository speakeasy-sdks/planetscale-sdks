package operations

type ListBranchesPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListBranchesQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListBranchesRequest struct {
	PathParams  ListBranchesPathParams
	QueryParams ListBranchesQueryParams
}

type ListBranchesResponse struct {
	ContentType                          string
	StatusCode                           int64
	ListBranches200ApplicationJSONObject map[string]map[string]interface{}
}
