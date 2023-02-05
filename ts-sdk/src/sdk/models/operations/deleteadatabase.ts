import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteADatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class DeleteADatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteADatabasePathParams;
}

export class DeleteADatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}