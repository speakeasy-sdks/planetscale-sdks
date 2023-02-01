package planetscale

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type DeployRequests struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDeployRequests(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DeployRequests {
	return &DeployRequests{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CancelAQueuedDeployRequest - Cancel a queued deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) CancelAQueuedDeployRequest(ctx context.Context, request operations.CancelAQueuedDeployRequestRequest) (*operations.CancelAQueuedDeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelAQueuedDeployRequestResponse{
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

			res.CancelAQueuedDeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CloseADeployRequest - Close a deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `write_deploy_requests` |
// | Database | `write_deploy_requests` |
func (s *DeployRequests) CloseADeployRequest(ctx context.Context, request operations.CloseADeployRequestRequest) (*operations.CloseADeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.CloseADeployRequestResponse{
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

			res.CloseADeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CompleteAGatedDeployRequest - Complete a gated deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) CompleteAGatedDeployRequest(ctx context.Context, request operations.CompleteAGatedDeployRequestRequest) (*operations.CompleteAGatedDeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/apply-deploy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompleteAGatedDeployRequestResponse{
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

			res.CompleteAGatedDeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CompleteARevert - Complete a revert
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) CompleteARevert(ctx context.Context, request operations.CompleteARevertRequest) (*operations.CompleteARevertResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/revert", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompleteARevertResponse{
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

			res.CompleteARevert200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CompleteAnErroredDeploy - Complete an errored deploy
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) CompleteAnErroredDeploy(ctx context.Context, request operations.CompleteAnErroredDeployRequest) (*operations.CompleteAnErroredDeployResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/complete-deploy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompleteAnErroredDeployResponse{
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

			res.CompleteAnErroredDeploy200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateADeployRequest - Create a deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_requests`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `write_deploy_requests` |
// | Database | `write_deploy_requests` |
func (s *DeployRequests) CreateADeployRequest(ctx context.Context, request operations.CreateADeployRequestRequest) (*operations.CreateADeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests", request.PathParams)

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

	res := &operations.CreateADeployRequestResponse{
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

			res.CreateADeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetADeployQueue - Get a deploy queue
//
// <p>Get the deploy queue for a database</p>
func (s *DeployRequests) GetADeployQueue(ctx context.Context, request operations.GetADeployQueueRequest) (*operations.GetADeployQueueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-queue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetADeployQueueResponse{
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

			res.GetADeployQueue200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetADeployRequest - Get a deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `read_deploy_requests` |
// | Database | `read_deploy_requests` |
func (s *DeployRequests) GetADeployRequest(ctx context.Context, request operations.GetADeployRequestRequest) (*operations.GetADeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetADeployRequestResponse{
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

			res.GetADeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetADeployment - Get a deployment
//
// <p>Get the deployment for a deploy request</p>
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `read_deploy_requests` |
// | Database | `read_deploy_requests` |
func (s *DeployRequests) GetADeployment(ctx context.Context, request operations.GetADeploymentRequest) (*operations.GetADeploymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deployment", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetADeploymentResponse{
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

			res.GetADeployment200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ListDeployOperations - List deploy operations
//
// <p>List deploy operations for a deploy request</p>
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `read_deploy_requests` |
// | Database | `read_deploy_requests` |
func (s *DeployRequests) ListDeployOperations(ctx context.Context, request operations.ListDeployOperationsRequest) (*operations.ListDeployOperationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/operations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListDeployOperationsResponse{
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

			res.ListDeployOperations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ListDeployRequests - List deploy requests
//
// <p>List deploy requests for a database</p>
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `read_deploy_requests` |
// | Database | `read_deploy_requests` |
func (s *DeployRequests) ListDeployRequests(ctx context.Context, request operations.ListDeployRequestsRequest) (*operations.ListDeployRequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListDeployRequestsResponse{
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

			res.ListDeployRequests200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// QueueADeployRequest - Queue a deploy request
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) QueueADeployRequest(ctx context.Context, request operations.QueueADeployRequestRequest) (*operations.QueueADeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/deploy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.QueueADeployRequestResponse{
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

			res.QueueADeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SkipRevertPeriod - Skip revert period
//
// <p>Skips the revert period for a deploy request</p>
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) SkipRevertPeriod(ctx context.Context, request operations.SkipRevertPeriodRequest) (*operations.SkipRevertPeriodResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/skip-revert", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SkipRevertPeriodResponse{
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

			res.SkipRevertPeriod200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateAutoApplyForDeployRequest - Update auto-apply for deploy request
//
// <p>Enables or disabled the auto-apply setting for a deploy request</p>
//
// ### Authorization
// A service token or OAuth token must have the following access or scopes in order to use this API endpoint:
//
// **Service Token Accesses**
//
//	`read_deploy_request`, `create_deploy_request`
//
// **OAuth Scopes**
//
//	| Resource | Scopes |
//
// | :------- | :---------- |
// | Organization | `deploy_deploy_requests` |
// | Database | `deploy_deploy_requests` |
func (s *DeployRequests) UpdateAutoApplyForDeployRequest(ctx context.Context, request operations.UpdateAutoApplyForDeployRequestRequest) (*operations.UpdateAutoApplyForDeployRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organization}/databases/{database}/deploy-requests/{number}/auto-apply", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateAutoApplyForDeployRequestResponse{
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

			res.UpdateAutoApplyForDeployRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}
