package operations

type GetADeploymentPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetADeploymentRequest struct {
	PathParams GetADeploymentPathParams
}

type GetADeploymentResponse struct {
	ContentType                            string
	StatusCode                             int
	GetADeployment200ApplicationJSONObject map[string]map[string]interface{}
}
