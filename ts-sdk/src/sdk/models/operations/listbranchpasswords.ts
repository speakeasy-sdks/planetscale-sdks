import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class ListBranchPasswordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class ListBranchPasswordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=read_only_region_id" })
  readOnlyRegionId?: string;
}

export class ListBranchPasswordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBranchPasswordsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBranchPasswordsQueryParams;
}

export class ListBranchPasswordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listBranchPasswords200ApplicationJSONObject?: Record<string, Record<string, any>>;
}