import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetADeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class GetADeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetADeployRequestPathParams;
}


export class GetADeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getADeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
