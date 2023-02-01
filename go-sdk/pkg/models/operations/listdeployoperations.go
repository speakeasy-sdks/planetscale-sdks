package operations

type ListDeployOperationsPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type ListDeployOperationsQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDeployOperationsRequest struct {
	PathParams  ListDeployOperationsPathParams
	QueryParams ListDeployOperationsQueryParams
}

type ListDeployOperationsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ListDeployOperations200ApplicationJSONObject map[string]map[string]interface{}
}
