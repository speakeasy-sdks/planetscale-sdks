package operations

type GetAnOauthApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Organization  string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetAnOauthApplicationRequest struct {
	PathParams GetAnOauthApplicationPathParams
}

type GetAnOauthApplicationResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetAnOauthApplication200ApplicationJSONObject map[string]map[string]interface{}
}
