import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListReadOnlyRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListReadOnlyRegionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListReadOnlyRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListReadOnlyRegionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListReadOnlyRegionsQueryParams;
}

export class ListReadOnlyRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listReadOnlyRegions200ApplicationJSONObject?: Record<string, Record<string, any>>;
}