import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteAnOauthTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token_id" })
  tokenId: string;
}

export class DeleteAnOauthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnOauthTokenPathParams;
}

export class DeleteAnOauthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}