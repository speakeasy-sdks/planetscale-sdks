import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateOrRenewAnOauthTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}
export enum CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    RefreshToken = "refresh_token"
}

export class CreateOrRenewAnOauthTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: CreateOrRenewAnOauthTokenRequestBodyGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;
}

export class CreateOrRenewAnOauthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrRenewAnOauthTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateOrRenewAnOauthTokenRequestBody;
}

export class CreateOrRenewAnOauthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrRenewAnOauthToken200ApplicationJSONObject?: Record<string, Record<string, any>>;
}