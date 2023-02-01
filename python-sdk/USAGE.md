<!-- Start SDK Example Usage -->
```python
import planetscaleapi
from planetscaleapi.models import operations, shared

s = planetscaleapi.PlanetscaleAPI()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateABranchPasswordRequest(
    path_params=operations.CreateABranchPasswordPathParams(
        branch="sit",
        database="voluptas",
        organization="culpa",
    ),
    request=operations.CreateABranchPasswordRequestBody(
        read_only_region_id="expedita",
        role="readwriter",
        ttl=96.199997,
    ),
)
    
res = s.database_branch_passwords.create_a_branch_password(req)

if res.create_a_branch_password_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->