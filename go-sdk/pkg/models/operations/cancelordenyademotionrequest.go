package operations

type CancelOrDenyADemotionRequestPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Name         string `pathParam:"style=simple,explode=false,name=name"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type CancelOrDenyADemotionRequestRequest struct {
	PathParams CancelOrDenyADemotionRequestPathParams
}

type CancelOrDenyADemotionRequestResponse struct {
	ContentType string
	StatusCode  int
}
