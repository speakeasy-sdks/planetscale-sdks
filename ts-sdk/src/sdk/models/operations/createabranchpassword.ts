import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateABranchPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export enum CreateABranchPasswordRequestBodyRoleEnum {
    Reader = "reader",
    Writer = "writer",
    Admin = "admin",
    Readwriter = "readwriter"
}


export class CreateABranchPasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=read_only_region_id" })
  readOnlyRegionId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: CreateABranchPasswordRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class CreateABranchPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateABranchPasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateABranchPasswordRequestBody;
}


export class CreateABranchPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createABranchPassword201ApplicationJSONObject?: Record<string, Record<string, any>>;
}
