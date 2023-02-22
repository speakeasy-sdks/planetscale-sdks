package operations

type ListOauthTokensPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Organization  string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListOauthTokensQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListOauthTokensRequest struct {
	PathParams  ListOauthTokensPathParams
	QueryParams ListOauthTokensQueryParams
}

type ListOauthTokensResponse struct {
	ContentType                             string
	StatusCode                              int
	ListOauthTokens200ApplicationJSONObject map[string]map[string]interface{}
}
