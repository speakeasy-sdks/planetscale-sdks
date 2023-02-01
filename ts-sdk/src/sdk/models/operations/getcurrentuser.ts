import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCurrentUser200ApplicationJSONObject?: Record<string, Record<string, any>>;
}
