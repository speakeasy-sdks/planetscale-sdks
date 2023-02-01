package operations

type CreateOrRenewAnOauthTokenPathParams struct {
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum string

const (
	CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnumAuthorizationCode CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum = "authorization_code"
	CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnumRefreshToken      CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum = "refresh_token"
)

type CreateOrRenewAnOauthTokenRequestBody struct {
	ClientID     string                                            `json:"client_id"`
	ClientSecret string                                            `json:"client_secret"`
	Code         *string                                           `json:"code,omitempty"`
	GrantType    CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum `json:"grant_type"`
	RedirectURI  *string                                           `json:"redirect_uri,omitempty"`
	RefreshToken *string                                           `json:"refresh_token,omitempty"`
}

type CreateOrRenewAnOauthTokenRequest struct {
	PathParams CreateOrRenewAnOauthTokenPathParams
	Request    *CreateOrRenewAnOauthTokenRequestBody `request:"mediaType=application/json"`
}

type CreateOrRenewAnOauthTokenResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	CreateOrRenewAnOauthToken200ApplicationJSONObject map[string]map[string]interface{}
}
