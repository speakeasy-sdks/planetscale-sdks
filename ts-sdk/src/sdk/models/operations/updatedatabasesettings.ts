import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class UpdateDatabaseSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class UpdateDatabaseSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allow_data_branching" })
  allowDataBranching?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "automatic_migrations" })
  automaticMigrations?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "default_branch" })
  defaultBranch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "insights_raw_queries" })
  insightsRawQueries?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "migration_framework" })
  migrationFramework?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "migration_table_name" })
  migrationTableName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "production_branch_web_console" })
  productionBranchWebConsole?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "require_approval_for_deploy" })
  requireApprovalForDeploy?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "restrict_branch_region" })
  restrictBranchRegion?: boolean;
}

export class UpdateDatabaseSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatabaseSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDatabaseSettingsRequestBody;
}

export class UpdateDatabaseSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDatabaseSettings200ApplicationJSONObject?: Record<string, Record<string, any>>;
}