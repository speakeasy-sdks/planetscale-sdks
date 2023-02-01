# github.com/speakeasy-sdks/orb-sdks/go-client-sdk

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-sdks/orb-sdks/go-client-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/orb-sdks/go-client-sdk/pkg/models/operations"
)

func main() {
    opts := []planetscale.SDKOption{
        planetscale.WithSecurity(
            shared.Security{
                APIKeyHeader: shared.SchemeAPIKeyHeader{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := planetscale.New(opts...)
    
    req := operations.CreateABranchPasswordRequest{
        PathParams: operations.CreateABranchPasswordPathParams{
            Branch: "sit",
            Database: "voluptas",
            Organization: "culpa",
        },
        Request: &operations.CreateABranchPasswordRequestBody{
            ReadOnlyRegionID: "expedita",
            Role: "readwriter",
            TTL: 96.199997,
        },
    }
    
    res, err := s.DatabaseBranchPasswords.CreateABranchPassword(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateABranchPassword201ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Database branch passwords

* `CreateABranchPassword` - Create a branch password
* `DeleteABranchPassword` - Delete a branch password
* `GetABranchPassword` - Get a branch password
* `ListBranchPasswords` - List branch passwords
* `RenewABranchPassword` - Renew a branch password
* `UpdateABranchPassword` - Update a branch password

### Database branches

* `CancelOrDenyADemotionRequest` - Cancel or deny a demotion request
* `CreateABranch` - Create a branch
* `CreateAPromotionRequest` - Create a promotion request
* `DeleteABranch` - Delete a branch
* `DemoteABranch` - Demote a branch
* `GetABranch` - Get a branch
* `GetABranchSchema` - Get a branch schema
* `GetADemotionRequest` - Get a demotion request
* `GetAPromotionRequest` - Get a promotion request
* `GetBranchStatus` - Get branch status
* `ListBranches` - List branches

### Databases

* `CreateADatabase` - Create a database
* `DeleteADatabase` - Delete a database
* `GetADatabase` - Get a database
* `ListDatabasePromotionRequests` - List database promotion requests
* `ListDatabaseRegions` - List database regions
* `ListDatabases` - List databases
* `ListReadOnlyRegions` - List read-only regions
* `UpdateDatabaseSettings` - Update database settings

### Deploy requests

* `CancelAQueuedDeployRequest` - Cancel a queued deploy request
* `CloseADeployRequest` - Close a deploy request
* `CompleteAGatedDeployRequest` - Complete a gated deploy request
* `CompleteARevert` - Complete a revert
* `CompleteAnErroredDeploy` - Complete an errored deploy
* `CreateADeployRequest` - Create a deploy request
* `GetADeployQueue` - Get a deploy queue
* `GetADeployRequest` - Get a deploy request
* `GetADeployment` - Get a deployment
* `ListDeployOperations` - List deploy operations
* `ListDeployRequests` - List deploy requests
* `QueueADeployRequest` - Queue a deploy request
* `SkipRevertPeriod` - Skip revert period
* `UpdateAutoApplyForDeployRequest` - Update auto-apply for deploy request

### OAuth applications

* `DeleteAnOauthToken` - Delete an OAuth token
* `GetAnOauthApplication` - Get an OAuth application
* `GetAnOauthToken` - Get an OAuth token
* `ListOauthApplications` - List OAuth applications
* `ListOauthTokens` - List OAuth tokens

### OAuth tokens

* `CreateOrRenewAnOauthToken` - Create or renew an OAuth token

### Organizations

* `GetAnOrganization` - Get an organization
* `ListOrganizations` - List organizations
* `ListRegionsForAnOrganization` - List regions for an organization
* `UpdateAnOrganization` - Update an organization

### Users

* `GetCurrentUser` - Get current user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)