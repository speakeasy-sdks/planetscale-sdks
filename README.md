# Planetscale SDKs

SDKs for the [Planetscale API](https://api-docs.planetscale.com/reference/getting-started-with-planetscale-api). Planetscale is the world's most advanced serverless MySQL platform. You can use the PlanetScale API to manage your PlanetScale databases programmatically. The PlanetScale API is currently in **beta**.

<!-- Start SDK Installation -->
## SDK Installation

Please see instructions on fetching from package managers for each language specific SDK.

<!-- End SDK Installation -->

## SDK Example Usage

Please see example usage for each language specific SDK. Here is an example for Typescript.

<!-- Start SDK Example Usage -->
```typescript
import { PlanetscaleApi, withSecurity} from "@planetscale/sdk";
import { CreateABranchPasswordRequest, CreateABranchPasswordResponse } from "@planetscale/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new PlanetscaleApi(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateABranchPasswordRequest = {
  pathParams: {
    branch: "sit",
    database: "voluptas",
    organization: "culpa",
  },
  request: {
    readOnlyRegionId: "expedita",
    role: "readwriter",
    ttl: 96.199997,
  },
};

sdk.databaseBranchPasswords.createABranchPassword(req).then((res: CreateABranchPasswordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Database branch passwords

* `createABranchPassword` - Create a branch password
* `deleteABranchPassword` - Delete a branch password
* `getABranchPassword` - Get a branch password
* `listBranchPasswords` - List branch passwords
* `renewABranchPassword` - Renew a branch password
* `updateABranchPassword` - Update a branch password

### Database branches

* `cancelOrDenyADemotionRequest` - Cancel or deny a demotion request
* `createABranch` - Create a branch
* `createAPromotionRequest` - Create a promotion request
* `deleteABranch` - Delete a branch
* `demoteABranch` - Demote a branch
* `getABranch` - Get a branch
* `getABranchSchema` - Get a branch schema
* `getADemotionRequest` - Get a demotion request
* `getAPromotionRequest` - Get a promotion request
* `getBranchStatus` - Get branch status
* `listBranches` - List branches

### Databases

* `createADatabase` - Create a database
* `deleteADatabase` - Delete a database
* `getADatabase` - Get a database
* `listDatabasePromotionRequests` - List database promotion requests
* `listDatabaseRegions` - List database regions
* `listDatabases` - List databases
* `listReadOnlyRegions` - List read-only regions
* `updateDatabaseSettings` - Update database settings

### Deploy requests

* `cancelAQueuedDeployRequest` - Cancel a queued deploy request
* `closeADeployRequest` - Close a deploy request
* `completeAGatedDeployRequest` - Complete a gated deploy request
* `completeARevert` - Complete a revert
* `completeAnErroredDeploy` - Complete an errored deploy
* `createADeployRequest` - Create a deploy request
* `getADeployQueue` - Get a deploy queue
* `getADeployRequest` - Get a deploy request
* `getADeployment` - Get a deployment
* `listDeployOperations` - List deploy operations
* `listDeployRequests` - List deploy requests
* `queueADeployRequest` - Queue a deploy request
* `skipRevertPeriod` - Skip revert period
* `updateAutoApplyForDeployRequest` - Update auto-apply for deploy request

### OAuth applications

* `deleteAnOauthToken` - Delete an OAuth token
* `getAnOauthApplication` - Get an OAuth application
* `getAnOauthToken` - Get an OAuth token
* `listOauthApplications` - List OAuth applications
* `listOauthTokens` - List OAuth tokens

### OAuth tokens

* `createOrRenewAnOauthToken` - Create or renew an OAuth token

### Organizations

* `getAnOrganization` - Get an organization
* `listOrganizations` - List organizations
* `listRegionsForAnOrganization` - List regions for an organization
* `updateAnOrganization` - Update an organization

### Users

* `getCurrentUser` - Get current user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
