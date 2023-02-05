import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UpdateABranchPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class UpdateABranchPasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=read_only_region_id" })
  readOnlyRegionId?: string;
}

export class UpdateABranchPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateABranchPasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateABranchPasswordRequestBody;
}

export class UpdateABranchPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateABranchPassword200ApplicationJSONObject?: Record<string, Record<string, any>>;
}