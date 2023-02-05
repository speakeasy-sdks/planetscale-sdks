<!-- Start SDK Example Usage -->
```typescript
import { PlanetscaleAPI, withSecurity} from "@planetscale/sdk";
import { CreateABranchPasswordRequest, CreateABranchPasswordResponse } from "@planetscale/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new PlanetscaleAPI(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateABranchPasswordRequest = {
  pathParams: {
    branch: "unde",
    database: "deserunt",
    organization: "porro",
  },
  request: {
    readOnlyRegionId: "nulla",
    role: "readwriter",
    ttl: 8579.46,
  },
};

sdk.databaseBranchPasswords.createABranchPassword(req).then((res: CreateABranchPasswordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->