package operations

type UpdateAnOrganizationPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateAnOrganizationRequestBody struct {
	BillingEmail                    *string `json:"billing_email,omitempty"`
	RequireAdminForProductionAccess *bool   `json:"require_admin_for_production_access,omitempty"`
}

type UpdateAnOrganizationRequest struct {
	PathParams UpdateAnOrganizationPathParams
	Request    *UpdateAnOrganizationRequestBody `request:"mediaType=application/json"`
}

type UpdateAnOrganizationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	UpdateAnOrganization200ApplicationJSONObject map[string]map[string]interface{}
}
