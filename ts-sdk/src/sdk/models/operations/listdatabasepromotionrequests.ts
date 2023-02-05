import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListDatabasePromotionRequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListDatabasePromotionRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListDatabasePromotionRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDatabasePromotionRequestsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDatabasePromotionRequestsQueryParams;
}

export class ListDatabasePromotionRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDatabasePromotionRequests200ApplicationJSONObject?: Record<string, Record<string, any>>;
}