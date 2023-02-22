package operations

type GetADemotionRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetADemotionRequestRequest struct {
	PathParams GetADemotionRequestPathParams
}

type GetADemotionRequestResponse struct {
	ContentType                                 string
	StatusCode                                  int
	GetADemotionRequest200ApplicationJSONObject map[string]map[string]interface{}
}
