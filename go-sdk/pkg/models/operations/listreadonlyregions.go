package operations

type ListReadOnlyRegionsPathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListReadOnlyRegionsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListReadOnlyRegionsRequest struct {
	PathParams  ListReadOnlyRegionsPathParams
	QueryParams ListReadOnlyRegionsQueryParams
}

type ListReadOnlyRegionsResponse struct {
	ContentType                                 string
	StatusCode                                  int
	ListReadOnlyRegions200ApplicationJSONObject map[string]map[string]interface{}
}
