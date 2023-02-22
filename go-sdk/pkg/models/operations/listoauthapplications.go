package operations

type ListOauthApplicationsPathParams struct {
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListOauthApplicationsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListOauthApplicationsRequest struct {
	PathParams  ListOauthApplicationsPathParams
	QueryParams ListOauthApplicationsQueryParams
}

type ListOauthApplicationsResponse struct {
	ContentType                                   string
	StatusCode                                    int
	ListOauthApplications200ApplicationJSONObject map[string]map[string]interface{}
}
