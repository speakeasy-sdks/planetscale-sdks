import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateADeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CreateADeployRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=into_branch" })
  intoBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}

export class CreateADeployRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateADeployRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateADeployRequestRequestBody;
}

export class CreateADeployRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createADeployRequest200ApplicationJSONObject?: Record<string, Record<string, any>>;
}