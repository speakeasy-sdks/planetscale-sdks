package operations

type CreateABranchPasswordPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateABranchPasswordRequestBodyRoleEnum string

const (
	CreateABranchPasswordRequestBodyRoleEnumReader     CreateABranchPasswordRequestBodyRoleEnum = "reader"
	CreateABranchPasswordRequestBodyRoleEnumWriter     CreateABranchPasswordRequestBodyRoleEnum = "writer"
	CreateABranchPasswordRequestBodyRoleEnumAdmin      CreateABranchPasswordRequestBodyRoleEnum = "admin"
	CreateABranchPasswordRequestBodyRoleEnumReadwriter CreateABranchPasswordRequestBodyRoleEnum = "readwriter"
)

type CreateABranchPasswordRequestBody struct {
	ReadOnlyRegionID *string                                   `json:"read_only_region_id,omitempty"`
	Role             *CreateABranchPasswordRequestBodyRoleEnum `json:"role,omitempty"`
	TTL              *float64                                  `json:"ttl,omitempty"`
}

type CreateABranchPasswordRequest struct {
	PathParams CreateABranchPasswordPathParams
	Request    *CreateABranchPasswordRequestBody `request:"mediaType=application/json"`
}

type CreateABranchPasswordResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CreateABranchPassword201ApplicationJSONObject map[string]map[string]interface{}
}
