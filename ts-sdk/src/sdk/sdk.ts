import * as utils from "../internal/utils";
import { DatabaseBranches } from "./databasebranches";
import { DatabaseBranchPasswords } from "./databasebranchpasswords";
import { Databases } from "./databases";
import { DeployRequests } from "./deployrequests";
import { Security } from "./models/shared";
import { OAuthApplications } from "./oauthapplications";
import { OAuthTokens } from "./oauthtokens";
import { Organizations } from "./organizations";
import { Users } from "./users";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.planetscale.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class PlanetscaleAPI {
  public databaseBranchPasswords: DatabaseBranchPasswords;
  public databaseBranches: DatabaseBranches;
  public databases: Databases;
  public deployRequests: DeployRequests;
  public oAuthApplications: OAuthApplications;
  public oAuthTokens: OAuthTokens;
  public organizations: Organizations;
  public users: Users;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.1.1";
  private _genVersion = "1.1.2";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.databaseBranchPasswords = new DatabaseBranchPasswords(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.databaseBranches = new DatabaseBranches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.databases = new Databases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deployRequests = new DeployRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuthApplications = new OAuthApplications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuthTokens = new OAuthTokens(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organizations = new Organizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}