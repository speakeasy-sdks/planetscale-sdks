import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBranchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class ListBranchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListBranchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBranchesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBranchesQueryParams;
}


export class ListBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBranches200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
