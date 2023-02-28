import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class UpdateAnOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export class UpdateAnOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billing_email" })
  billingEmail?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "require_admin_for_production_access" })
  requireAdminForProductionAccess?: boolean;
}

export class UpdateAnOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAnOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAnOrganizationRequestBody;
}

export class UpdateAnOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAnOrganization200ApplicationJSONObject?: Record<string, Record<string, any>>;
}