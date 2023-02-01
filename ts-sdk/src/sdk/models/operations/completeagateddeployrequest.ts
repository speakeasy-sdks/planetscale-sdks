import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompleteAGatedDeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class CompleteAGatedDeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteAGatedDeployRequestPathParams;
}


export class CompleteAGatedDeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  completeAGatedDeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
