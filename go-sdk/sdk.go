package planetscale

import (
	"net/http"

	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/utils"
)

var ServerList = []string{
	"https://api.planetscale.com/v1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type Planetscale struct {
	DatabaseBranchPasswords *DatabaseBranchPasswords
	DatabaseBranches        *DatabaseBranches
	Databases               *Databases
	DeployRequests          *DeployRequests
	OAuthApplications       *OAuthApplications
	OAuthTokens             *OAuthTokens
	Organizations           *Organizations
	Users                   *Users

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
		_sdkVersion: "1.2.0",
		_genVersion: "0.22.0",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
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

	sdk.DatabaseBranchPasswords = NewDatabaseBranchPasswords(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DatabaseBranches = NewDatabaseBranches(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Databases = NewDatabases(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DeployRequests = NewDeployRequests(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OAuthApplications = NewOAuthApplications(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OAuthTokens = NewOAuthTokens(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Organizations = NewOrganizations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Users = NewUsers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
