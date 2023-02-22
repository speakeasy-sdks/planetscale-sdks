package operations

type GetADeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetADeployRequestRequest struct {
	PathParams GetADeployRequestPathParams
}

type GetADeployRequestResponse struct {
	ContentType                               string
	StatusCode                                int
	GetADeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
