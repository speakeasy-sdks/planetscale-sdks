package operations

type QueueADeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type QueueADeployRequestRequest struct {
	PathParams QueueADeployRequestPathParams
}

type QueueADeployRequestResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	QueueADeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
