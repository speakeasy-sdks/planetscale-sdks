import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class GetABranchPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class GetABranchPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=read_only_region_id" })
  readOnlyRegionId?: string;
}

export class GetABranchPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABranchPasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: GetABranchPasswordQueryParams;
}

export class GetABranchPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABranchPassword200ApplicationJSONObject?: Record<string, Record<string, any>>;
}