import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListOauthTokensPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class ListOauthTokensQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListOauthTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListOauthTokensPathParams;

  @SpeakeasyMetadata()
  queryParams: ListOauthTokensQueryParams;
}


export class ListOauthTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listOauthTokens200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
