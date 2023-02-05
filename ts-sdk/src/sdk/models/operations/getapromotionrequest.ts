import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetAPromotionRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class GetAPromotionRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAPromotionRequestPathParams;
}

export class GetAPromotionRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAPromotionRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}