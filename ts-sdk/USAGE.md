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