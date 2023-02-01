package operations

type CreateADeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateADeployRequestRequestBody struct {
	Branch     *string `json:"branch,omitempty"`
	IntoBranch *string `json:"into_branch,omitempty"`
	Notes      *string `json:"notes,omitempty"`
	Number     *string `json:"number,omitempty"`
}

type CreateADeployRequestRequest struct {
	PathParams CreateADeployRequestPathParams
	Request    *CreateADeployRequestRequestBody `request:"mediaType=application/json"`
}

type CreateADeployRequestResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateADeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
