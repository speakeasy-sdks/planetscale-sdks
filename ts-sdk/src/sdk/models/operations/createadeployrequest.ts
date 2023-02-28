import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CreateADeployRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CreateADeployRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "into_branch" })
  intoBranch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
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