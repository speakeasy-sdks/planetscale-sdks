package operations

type CancelAQueuedDeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CancelAQueuedDeployRequestRequest struct {
	PathParams CancelAQueuedDeployRequestPathParams
}

type CancelAQueuedDeployRequestResponse struct {
	ContentType                                        string
	StatusCode                                         int
	CancelAQueuedDeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
