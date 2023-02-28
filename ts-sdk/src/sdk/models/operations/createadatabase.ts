import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CreateADatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class CreateADatabaseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;
}

export class CreateADatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateADatabasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateADatabaseRequestBody;
}

export class CreateADatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createADatabase201ApplicationJSONObject?: Record<string, Record<string, any>>;
}