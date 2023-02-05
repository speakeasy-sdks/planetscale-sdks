import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CompleteAnErroredDeployPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CompleteAnErroredDeployRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteAnErroredDeployPathParams;
}

export class CompleteAnErroredDeployResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  completeAnErroredDeploy200ApplicationJSONObject?: Record<string, Record<string, any>>;
}