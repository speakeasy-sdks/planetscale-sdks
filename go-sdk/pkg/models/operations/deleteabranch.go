package operations

type DeleteABranchPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type DeleteABranchRequest struct {
	PathParams DeleteABranchPathParams
}

type DeleteABranchResponse struct {
	ContentType string
	StatusCode  int
}
