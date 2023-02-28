import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class ListOauthApplicationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListOauthApplicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListOauthApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListOauthApplicationsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListOauthApplicationsQueryParams;
}

export class ListOauthApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listOauthApplications200ApplicationJSONObject?: Record<string, Record<string, any>>;
}