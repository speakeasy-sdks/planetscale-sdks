package operations

type SkipRevertPeriodPathParams struct {
	Database     string `pathParam:"style=simple,explode=false,name=database"`
	Number       string `pathParam:"style=simple,explode=false,name=number"`
	Organization string `pathParam:"style=simple,explode=false,name=organization"`
}

type SkipRevertPeriodRequest struct {
	PathParams SkipRevertPeriodPathParams
}

type SkipRevertPeriodResponse struct {
	ContentType                              string
	StatusCode                               int64
	SkipRevertPeriod200ApplicationJSONObject map[string]map[string]interface{}
}
