package operations

type CompleteARevertPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CompleteARevertRequest struct {
	PathParams CompleteARevertPathParams
}

type CompleteARevertResponse struct {
	ContentType                             string
	StatusCode                              int
	CompleteARevert200ApplicationJSONObject map[string]map[string]interface{}
}
