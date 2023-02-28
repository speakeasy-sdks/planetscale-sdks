import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CloseADeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}
export enum CloseADeployRequestRequestBodyStateEnum {
    Closed = "closed"
}

export class CloseADeployRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: CloseADeployRequestRequestBodyStateEnum;
}

export class CloseADeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloseADeployRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CloseADeployRequestRequestBody;
}

export class CloseADeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  closeADeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}