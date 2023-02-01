package operations

type GetAPromotionRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetAPromotionRequestRequest struct {
	PathParams GetAPromotionRequestPathParams
}

type GetAPromotionRequestResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetAPromotionRequest200ApplicationJSONObject map[string]map[string]interface{}
}
