import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetABranchSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class GetABranchSchemaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyspace" })
  keyspace?: string;
}


export class GetABranchSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetABranchSchemaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetABranchSchemaQueryParams;
}


export class GetABranchSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getABranchSchema200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
