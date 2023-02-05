import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UpdateDatabaseSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}

export class UpdateDatabaseSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_data_branching" })
  allowDataBranching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatic_migrations" })
  automaticMigrations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=insights_raw_queries" })
  insightsRawQueries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=migration_framework" })
  migrationFramework?: string;

  @SpeakeasyMetadata({ data: "json, name=migration_table_name" })
  migrationTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=production_branch_web_console" })
  productionBranchWebConsole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_approval_for_deploy" })
  requireApprovalForDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restrict_branch_region" })
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