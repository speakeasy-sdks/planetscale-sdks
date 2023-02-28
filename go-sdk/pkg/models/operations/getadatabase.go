package operations

type GetADatabasePathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetADatabaseRequest struct {
	PathParams GetADatabasePathParams
}

type GetADatabaseResponse struct {
	ContentType                          string
	StatusCode                           int
	GetADatabase200ApplicationJSONObject map[string]map[string]interface{}
}
