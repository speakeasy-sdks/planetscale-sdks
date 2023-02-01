package operations

type ListDatabasePromotionRequestsPathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListDatabasePromotionRequestsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDatabasePromotionRequestsRequest struct {
	PathParams  ListDatabasePromotionRequestsPathParams
	QueryParams ListDatabasePromotionRequestsQueryParams
}

type ListDatabasePromotionRequestsResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ListDatabasePromotionRequests200ApplicationJSONObject map[string]map[string]interface{}
}
