package operations

type GetAnOauthTokenPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Organization  string `pathParam:"style=simple,explode=false,name=organization"`
	TokenID       string `pathParam:"style=simple,explode=false,name=token_id"`
}

type GetAnOauthTokenRequest struct {
	PathParams GetAnOauthTokenPathParams
}

type GetAnOauthTokenResponse struct {
	ContentType                             string
	StatusCode                              int
	GetAnOauthToken200ApplicationJSONObject map[string]map[string]interface{}
}
