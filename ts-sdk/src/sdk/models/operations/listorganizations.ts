import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListOrganizationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export class ListOrganizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOrganizationsQueryParams;
}

export class ListOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listOrganizations200ApplicationJSONObject?: Record<string, Record<string, any>>;
}