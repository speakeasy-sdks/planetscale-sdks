package operations

type CreateADatabasePathParams struct {
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CreateADatabaseRequestBody struct {
	Name  string  `json:"name"`
	Notes *string `json:"notes,omitempty"`
}

type CreateADatabaseRequest struct {
	PathParams CreateADatabasePathParams
	Request    *CreateADatabaseRequestBody `request:"mediaType=application/json"`
}

type CreateADatabaseResponse struct {
	ContentType                             string
	StatusCode                              int
	CreateADatabase201ApplicationJSONObject map[string]map[string]interface{}
}
