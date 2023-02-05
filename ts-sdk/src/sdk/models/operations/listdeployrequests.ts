import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListDeployRequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListDeployRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListDeployRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDeployRequestsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeployRequestsQueryParams;
}

export class ListDeployRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDeployRequests200ApplicationJSONObject?: Record<string, Record<string, any>>;
}