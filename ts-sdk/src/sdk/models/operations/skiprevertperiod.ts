import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SkipRevertPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class SkipRevertPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SkipRevertPeriodPathParams;
}


export class SkipRevertPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  skipRevertPeriod200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
