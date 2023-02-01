import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RenewABranchPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class RenewABranchPasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=read_only_region_id" })
  readOnlyRegionId?: string;
}


export class RenewABranchPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenewABranchPasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RenewABranchPasswordRequestBody;
}


export class RenewABranchPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  renewABranchPassword200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
