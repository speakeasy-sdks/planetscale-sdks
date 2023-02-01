package operations

type ListOrganizationsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListOrganizationsRequest struct {
	QueryParams ListOrganizationsQueryParams
}

type ListOrganizationsResponse struct {
	ContentType                               string
	StatusCode                                int64
	ListOrganizations200ApplicationJSONObject map[string]map[string]interface{}
}
