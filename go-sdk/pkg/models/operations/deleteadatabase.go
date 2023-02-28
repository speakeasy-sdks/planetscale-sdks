package operations

type DeleteADatabasePathParams struct {
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type DeleteADatabaseRequest struct {
	PathParams DeleteADatabasePathParams
}

type DeleteADatabaseResponse struct {
	ContentType string
	StatusCode  int
}
