package operations

type CompleteAnErroredDeployPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CompleteAnErroredDeployRequest struct {
	PathParams CompleteAnErroredDeployPathParams
}

type CompleteAnErroredDeployResponse struct {
	ContentType                                     string
	StatusCode                                      int
	CompleteAnErroredDeploy200ApplicationJSONObject map[string]map[string]interface{}
}
