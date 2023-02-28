import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class GetAnOauthApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class GetAnOauthApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnOauthApplicationPathParams;
}

export class GetAnOauthApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAnOauthApplication200ApplicationJSONObject?: Record<string, Record<string, any>>;
}