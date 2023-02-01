<!-- Start SDK Example Usage -->
```go
package main

import (
    "github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/planetscale-sdks/go-client-sdk/pkg/models/operations"
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