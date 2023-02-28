import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DemoteABranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: number;
}

export class DemoteABranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DemoteABranchPathParams;
}

export class DemoteABranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  demoteABranch200ApplicationJSONObject?: Record<string, Record<string, any>>;
}