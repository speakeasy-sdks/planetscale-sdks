<!-- Start SDK Example Usage -->
```typescript
import {
  CreateABranchPasswordRequest,
  CreateABranchPasswordResponse 
} from "@planetscale/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { PlanetscaleAPI } from "@planetscale/sdk";

const sdk = new PlanetscaleAPI({
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
});
    
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