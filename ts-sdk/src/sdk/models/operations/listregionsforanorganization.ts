import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class ListRegionsForAnOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export class ListRegionsForAnOrganizationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListRegionsForAnOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListRegionsForAnOrganizationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRegionsForAnOrganizationQueryParams;
}

export class ListRegionsForAnOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listRegionsForAnOrganization200ApplicationJSONObject?: Record<string, Record<string, any>>;
}