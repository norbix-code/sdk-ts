import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: files
 * Endpoints: 18
 */
export class FilesModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/files/disable
   * Request DTO: DisableFiles
   */
  disableFiles = (
    request: Partial<CodeMashHub2.DisableFiles> = {} as Partial<CodeMashHub2.DisableFiles>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/enable
   * Request DTO: EnableFiles
   */
  enableFiles = (
    request: Partial<CodeMashHub2.EnableFiles> = {} as Partial<CodeMashHub2.EnableFiles>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/files/triggers/{triggerId}
   * Request DTO: DeleteFilesTrigger
   */
  deleteFilesTrigger = (
    request: Partial<CodeMashHub2.DeleteFilesTrigger> = {} as Partial<CodeMashHub2.DeleteFilesTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/triggers/{triggerId}',
      method: 'DELETE',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/files/triggers/{triggerId}/disable
   * Request DTO: DisableFilesTrigger
   */
  disableFilesTrigger = (
    request: Partial<CodeMashHub2.DisableFilesTrigger> = {} as Partial<CodeMashHub2.DisableFilesTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/triggers/{triggerId}/disable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/files/triggers/{triggerId}/enable
   * Request DTO: EnableFilesTrigger
   */
  enableFilesTrigger = (
    request: Partial<CodeMashHub2.EnableFilesTrigger> = {} as Partial<CodeMashHub2.EnableFilesTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/triggers/{triggerId}/enable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/triggers/{id}
   * Request DTO: GetFilesTrigger
   */
  getFilesTrigger = (
    request: Partial<CodeMashHub2.GetFilesTrigger> = {} as Partial<CodeMashHub2.GetFilesTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFilesTriggerResponse> => {
    return this.transport.send<CodeMashHub2.GetFilesTriggerResponse>({
      target: 'hub',
      path: '/{version}/files/triggers/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/triggers
   * Request DTO: GetFilesTriggers
   */
  getFilesTriggers = (
    request: Partial<CodeMashHub2.GetFilesTriggers> = {} as Partial<CodeMashHub2.GetFilesTriggers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFilesTriggersResponse> => {
    return this.transport.send<CodeMashHub2.GetFilesTriggersResponse>({
      target: 'hub',
      path: '/{version}/files/triggers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/triggers
   * Request DTO: SaveFilesTrigger
   */
  saveFilesTrigger = (
    request: Partial<CodeMashHub2.SaveFilesTrigger> = {} as Partial<CodeMashHub2.SaveFilesTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/files/triggers',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/files/integrations/{Id}
   * Request DTO: DeleteFilesIntegrationRequest
   */
  deleteFilesIntegration = (
    request: Partial<CodeMashHub2.DeleteFilesIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteFilesIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/files/integrations/{Id}/disable
   * Request DTO: DisableFilesIntegrationRequest
   */
  disableFilesIntegration = (
    request: Partial<CodeMashHub2.DisableFilesIntegrationRequest> = {} as Partial<CodeMashHub2.DisableFilesIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/files/integrations/{Id}/enable
   * Request DTO: EnableFilesIntegrationRequest
   */
  enableFilesIntegration = (
    request: Partial<CodeMashHub2.EnableFilesIntegrationRequest> = {} as Partial<CodeMashHub2.EnableFilesIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/integrations/{id}
   * Request DTO: GetFilesIntegration
   */
  getFilesIntegration = (
    request: Partial<CodeMashHub2.GetFilesIntegration> = {} as Partial<CodeMashHub2.GetFilesIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFilesIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetFilesIntegrationResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/integrations
   * Request DTO: GetFilesIntegrations
   */
  getFilesIntegrations = (
    request: Partial<CodeMashHub2.GetFilesIntegrations> = {} as Partial<CodeMashHub2.GetFilesIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFilesIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetFilesIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/files/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/integrations
   * Request DTO: SaveFilesIntegration
   */
  saveFilesIntegration = (
    request: Partial<CodeMashHub2.SaveFilesIntegration> = {} as Partial<CodeMashHub2.SaveFilesIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/files/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/files/integrations/{Id}/default
   * Request DTO: SetFilesIntegrationAsDefaultRequest
   */
  setFilesIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetFilesIntegrationAsDefaultRequest> = {} as Partial<CodeMashHub2.SetFilesIntegrationAsDefaultRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/integrations/test
   * Request DTO: TestFilesIntegration
   */
  testFilesIntegration = (
    request: Partial<CodeMashHub2.TestFilesIntegration> = {} as Partial<CodeMashHub2.TestFilesIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestFilesIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestFilesIntegrationResponse>({
      target: 'hub',
      path: '/{version}/files/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/item
   * Request DTO: GetFile
   */
  getFile = (
    request: Partial<CodeMashHub2.GetFile> = {} as Partial<CodeMashHub2.GetFile>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFileResponse> => {
    return this.transport.send<CodeMashHub2.GetFileResponse>({
      target: 'hub',
      path: '/{version}/files/item',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/folder
   * Request DTO: GetFolderFiles
   */
  getFolderFiles = (
    request: Partial<CodeMashHub2.GetFolderFiles> = {} as Partial<CodeMashHub2.GetFolderFiles>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetFolderFilesResponse> => {
    return this.transport.send<CodeMashHub2.GetFolderFilesResponse>({
      target: 'hub',
      path: '/{version}/files/folder',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  // ---------------------------------------------------------------------
  // Public file links (10b-files slice PUB). Hand-added by slice SDK-2 in
  // the shape `npm run generate-endpoints` produces; the next regeneration
  // writes them from the DTO definitions and this block can go.
  // ---------------------------------------------------------------------

  /**
   * POST /{version}/files/item/public
   * Request DTO: MakeFilePublicRequest
   *
   * Makes one file readable by anyone holding its link. Answers with the
   * `nbpf_…` public id; the link itself is on the file's `publicUrl` the next
   * time you read it.
   */
  makeFilePublic = (
    request: Partial<CodeMashHub2.MakeFilePublicRequest> = {} as Partial<CodeMashHub2.MakeFilePublicRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/files/item/public',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/item/private
   * Request DTO: MakeFilePrivateRequest
   *
   * Takes a file's public link away. It is refused while a folder above the
   * file is public — switch the folder off instead.
   */
  makeFilePrivate = (
    request: Partial<CodeMashHub2.MakeFilePrivateRequest> = {} as Partial<CodeMashHub2.MakeFilePrivateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/item/private',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/folder/public
   * Request DTO: MakeFolderPublicRequest
   *
   * Publishes a whole folder prefix — one record, however many files sit
   * under it, at any depth. The root cannot be published.
   */
  makeFolderPublic = (
    request: Partial<CodeMashHub2.MakeFolderPublicRequest> = {} as Partial<CodeMashHub2.MakeFolderPublicRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/files/folder/public',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/folder/private
   * Request DTO: MakeFolderPrivateRequest
   *
   * Takes back every link inside the folder, including per-file ones.
   */
  makeFolderPrivate = (
    request: Partial<CodeMashHub2.MakeFolderPrivateRequest> = {} as Partial<CodeMashHub2.MakeFolderPrivateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/files/folder/private',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
