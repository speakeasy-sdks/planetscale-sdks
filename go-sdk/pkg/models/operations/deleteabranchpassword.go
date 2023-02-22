package operations

type DeleteABranchPasswordPathParams struct {
	Branch       string `pathParam:"style=simple,explode=false,name=branch"`
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type DeleteABranchPasswordRequest struct {
	PathParams DeleteABranchPasswordPathParams
}

type DeleteABranchPasswordResponse struct {
	ContentType string
	StatusCode  int
}
