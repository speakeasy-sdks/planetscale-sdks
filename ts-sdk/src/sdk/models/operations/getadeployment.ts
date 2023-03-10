import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetADeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class GetADeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetADeploymentPathParams;
}


export class GetADeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getADeployment200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
