package shared

type SchemeAPIKeyHeader struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	APIKeyHeader SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}
