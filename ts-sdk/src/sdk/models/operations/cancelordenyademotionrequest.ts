import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelOrDenyADemotionRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class CancelOrDenyADemotionRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelOrDenyADemotionRequestPathParams;
}


export class CancelOrDenyADemotionRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
