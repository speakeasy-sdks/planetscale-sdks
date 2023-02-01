package operations

type CreateAPromotionRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateAPromotionRequestRequest struct {
	PathParams CreateAPromotionRequestPathParams
}

type CreateAPromotionRequestResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateAPromotionRequest200ApplicationJSONObject map[string]map[string]interface{}
}
