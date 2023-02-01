package operations

type GetAnOrganizationPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetAnOrganizationRequest struct {
	PathParams GetAnOrganizationPathParams
}

type GetAnOrganizationResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetAnOrganization200ApplicationJSONObject map[string]map[string]interface{}
}
