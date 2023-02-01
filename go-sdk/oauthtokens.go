package planetscale

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type OAuthTokens struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOAuthTokens(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OAuthTokens {
	return &OAuthTokens{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateOrRenewAnOauthToken - Create or renew an OAuth token
//
// <p>Create an OAuth token from an authorization grant code, or refresh an OAuth token from a refresh token</p>
//
// ### Authorization
// A service token   must have the following access   in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`write_oauth_tokens`
func (s *OAuthTokens) CreateOrRenewAnOauthToken(ctx context.Context, request operations.CreateOrRenewAnOauthTokenRequest) (*operations.CreateOrRenewAnOauthTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/oauth-applications/{id}/token", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrRenewAnOauthTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateOrRenewAnOauthToken200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 422:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
