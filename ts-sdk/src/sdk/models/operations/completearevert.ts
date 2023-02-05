import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CompleteARevertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CompleteARevertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteARevertPathParams;
}

export class CompleteARevertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  completeARevert200ApplicationJSONObject?: Record<string, Record<string, any>>;
}