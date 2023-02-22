package operations

type DeleteAnOauthTokenPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Organization  string `pathParam:"style=simple,explode=false,name=organization"`
	TokenID       string `pathParam:"style=simple,explode=false,name=token_id"`
}

type DeleteAnOauthTokenRequest struct {
	PathParams DeleteAnOauthTokenPathParams
}

type DeleteAnOauthTokenResponse struct {
	ContentType string
	StatusCode  int
}
