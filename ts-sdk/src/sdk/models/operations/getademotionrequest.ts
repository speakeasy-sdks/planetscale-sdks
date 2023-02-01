import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetADemotionRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class GetADemotionRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetADemotionRequestPathParams;
}


export class GetADemotionRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getADemotionRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
