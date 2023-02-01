package operations

type GetABranchSchemaPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type GetABranchSchemaQueryParams struct {
	Keyspace *string `queryParam:"style=form,explode=true,name=keyspace"`
}

type GetABranchSchemaRequest struct {
	PathParams  GetABranchSchemaPathParams
	QueryParams GetABranchSchemaQueryParams
}

type GetABranchSchemaResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetABranchSchema200ApplicationJSONObject map[string]map[string]interface{}
}
