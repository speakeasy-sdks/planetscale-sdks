import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAPromotionRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class CreateAPromotionRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAPromotionRequestPathParams;
}


export class CreateAPromotionRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAPromotionRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
