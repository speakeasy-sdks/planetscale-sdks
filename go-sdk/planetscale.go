package planetscale

import (
	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/v2/pkg/models/shared"
	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/v2/pkg/utils"
	"net/http"
	"time"
)

var ServerList = []string{
	"https://api.planetscale.com/v1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type Planetscale struct {
	DatabaseBranchPasswords *databaseBranchPasswords
	DatabaseBranches        *databaseBranches
	Databases               *databases
	DeployRequests          *deployRequests
	OAuthApplications       *oAuthApplications
	OAuthTokens             *oAuthTokens
	Organizations           *organizations
	Users                   *users

	// Non-idiomatic field names below are to namespace fields from the fields names above to avoid name conflicts
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*Planetscale)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *Planetscale) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *Planetscale) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *Planetscale) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *Planetscale {
	sdk := &Planetscale{
		_language:   "go",
		_sdkVersion: "2.5.2",
		_genVersion: "1.5.4",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	// Use WithClient to override the default client if you would like to customize the timeout
	if sdk._defaultClient == nil {
		sdk._defaultClient = &http.Client{Timeout: 60 * time.Second}
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.DatabaseBranchPasswords = newDatabaseBranchPasswords(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DatabaseBranches = newDatabaseBranches(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Databases = newDatabases(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DeployRequests = newDeployRequests(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OAuthApplications = newOAuthApplications(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OAuthTokens = newOAuthTokens(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Organizations = newOrganizations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Users = newUsers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
