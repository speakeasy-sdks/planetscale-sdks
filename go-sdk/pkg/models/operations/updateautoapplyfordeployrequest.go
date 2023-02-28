package operations

type UpdateAutoApplyForDeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type UpdateAutoApplyForDeployRequestRequest struct {
	PathParams UpdateAutoApplyForDeployRequestPathParams
}

type UpdateAutoApplyForDeployRequestResponse struct {
	ContentType                                             string
	StatusCode                                              int
	UpdateAutoApplyForDeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
