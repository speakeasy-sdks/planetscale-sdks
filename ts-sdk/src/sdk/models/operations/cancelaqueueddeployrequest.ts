import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CancelAQueuedDeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CancelAQueuedDeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelAQueuedDeployRequestPathParams;
}

export class CancelAQueuedDeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelAQueuedDeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}