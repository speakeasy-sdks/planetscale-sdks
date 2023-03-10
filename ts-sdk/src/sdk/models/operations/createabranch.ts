import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateABranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class CreateABranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_id" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_branch" })
  parentBranch: string;
}


export class CreateABranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateABranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateABranchRequestBody;
}


export class CreateABranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createABranch201ApplicationJSONObject?: Record<string, Record<string, any>>;
}
