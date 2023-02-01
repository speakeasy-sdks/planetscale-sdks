package operations

type GetADeployQueuePathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetADeployQueueRequest struct {
	PathParams GetADeployQueuePathParams
}

type GetADeployQueueResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetADeployQueue200ApplicationJSONObject map[string]map[string]interface{}
}
