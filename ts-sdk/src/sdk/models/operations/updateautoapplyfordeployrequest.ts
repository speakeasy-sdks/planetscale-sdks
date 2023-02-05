import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UpdateAutoApplyForDeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class UpdateAutoApplyForDeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAutoApplyForDeployRequestPathParams;
}

export class UpdateAutoApplyForDeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAutoApplyForDeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}