package operations

type CloseADeployRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CloseADeployRequestRequestBodyStateEnum string

const (
	CloseADeployRequestRequestBodyStateEnumClosed CloseADeployRequestRequestBodyStateEnum = "closed"
)

type CloseADeployRequestRequestBody struct {
	State *CloseADeployRequestRequestBodyStateEnum `json:"state,omitempty"`
}

type CloseADeployRequestRequest struct {
	PathParams CloseADeployRequestPathParams
	Request    *CloseADeployRequestRequestBody `request:"mediaType=application/json"`
}

type CloseADeployRequestResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CloseADeployRequest200ApplicationJSONObject map[string]map[string]interface{}
}
