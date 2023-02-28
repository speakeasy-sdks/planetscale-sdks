package operations

type ListDeployRequestsPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListDeployRequestsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDeployRequestsRequest struct {
	PathParams  ListDeployRequestsPathParams
	QueryParams ListDeployRequestsQueryParams
}

type ListDeployRequestsResponse struct {
	ContentType                                string
	StatusCode                                 int
	ListDeployRequests200ApplicationJSONObject map[string]map[string]interface{}
}
