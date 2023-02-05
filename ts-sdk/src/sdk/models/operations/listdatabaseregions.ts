import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListDatabaseRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListDatabaseRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListDatabaseRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDatabaseRegionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDatabaseRegionsQueryParams;
}

export class ListDatabaseRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDatabaseRegions200ApplicationJSONObject?: Record<string, Record<string, any>>;
}