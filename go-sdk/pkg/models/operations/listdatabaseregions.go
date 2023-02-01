package operations

type ListDatabaseRegionsPathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListDatabaseRegionsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDatabaseRegionsRequest struct {
	PathParams  ListDatabaseRegionsPathParams
	QueryParams ListDatabaseRegionsQueryParams
}

type ListDatabaseRegionsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListDatabaseRegions200ApplicationJSONObject map[string]map[string]interface{}
}
