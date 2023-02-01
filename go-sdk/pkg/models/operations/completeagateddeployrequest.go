package operations

type CompleteAGatedDeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CompleteAGatedDeployRequestRequest struct {
	PathParams CompleteAGatedDeployRequestPathParams
}

type CompleteAGatedDeployRequestResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	CompleteAGatedDeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
