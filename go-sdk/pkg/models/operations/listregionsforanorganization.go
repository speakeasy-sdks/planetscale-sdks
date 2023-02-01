package operations

type ListRegionsForAnOrganizationPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ListRegionsForAnOrganizationQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListRegionsForAnOrganizationRequest struct {
	PathParams  ListRegionsForAnOrganizationPathParams
	QueryParams ListRegionsForAnOrganizationQueryParams
}

type ListRegionsForAnOrganizationResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ListRegionsForAnOrganization200ApplicationJSONObject map[string]map[string]interface{}
}
