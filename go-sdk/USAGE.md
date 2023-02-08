<!-- Start SDK Example Usage -->
```go
package main

import (
    "log"
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
            Branch: "unde",
            Database: "deserunt",
            Organization: "porro",
        },
        Request: &operations.CreateABranchPasswordRequestBody{
            ReadOnlyRegionID: "nulla",
            Role: "readwriter",
            TTL: 8579.46,
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