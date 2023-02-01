import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetAnOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnOrganizationPathParams;
}


export class GetAnOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAnOrganization200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
