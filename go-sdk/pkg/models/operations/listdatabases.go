package operations

type ListDatabasesPathParams struct {
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListDatabasesQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDatabasesRequest struct {
	PathParams  ListDatabasesPathParams
	QueryParams ListDatabasesQueryParams
}

type ListDatabasesResponse struct {
	ContentType                           string
	StatusCode                            int64
	ListDatabases200ApplicationJSONObject map[string]map[string]interface{}
}
