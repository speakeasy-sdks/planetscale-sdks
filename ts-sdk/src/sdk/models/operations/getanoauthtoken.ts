import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnOauthTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token_id" })
  tokenId: string;
}


export class GetAnOauthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnOauthTokenPathParams;
}


export class GetAnOauthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAnOauthToken200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
