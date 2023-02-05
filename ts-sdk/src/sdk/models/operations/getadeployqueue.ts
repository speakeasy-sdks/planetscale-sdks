import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetADeployQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class GetADeployQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetADeployQueuePathParams;
}

export class GetADeployQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getADeployQueue200ApplicationJSONObject?: Record<string, Record<string, any>>;
}