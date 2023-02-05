import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetABranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class GetABranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABranchPathParams;
}

export class GetABranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABranch200ApplicationJSONObject?: Record<string, Record<string, any>>;
}