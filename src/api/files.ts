import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: files
 * Endpoints: 12
 */
export class FilesModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/files/{filesIntegrationId}/commit
   * Request DTO: CommitUploadRequest
   */
  commitUpload = (
    request: Partial<CodeMashApi2.CommitUploadRequest> = {} as Partial<CodeMashApi2.CommitUploadRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/commit',
      method: 'POST',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/{filesIntegrationId}/content
   * Request DTO: GetFileContentRequest
   */
  getFileContent = (
    request: Partial<CodeMashApi2.GetFileContentRequest> = {} as Partial<CodeMashApi2.GetFileContentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<Uint8Array> => {
    return this.transport.send<Uint8Array>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/content',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'unauthenticated',
      responseType: 'binary',
      ...options,
    });
  };

  /**
   * PUT /{version}/files/{filesIntegrationId}/content
   * Request DTO: PutFileContentRequest
   */
  putFileContent = (
    request: Partial<CodeMashApi2.PutFileContentRequest> = {} as Partial<CodeMashApi2.PutFileContentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/content',
      method: 'PUT',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/files/{filesIntegrationId}
   * Request DTO: DeleteFileApiRequest
   */
  deleteFileApi = (
    request: Partial<CodeMashApi2.DeleteFileApiRequest> = {} as Partial<CodeMashApi2.DeleteFileApiRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}',
      method: 'DELETE',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/files/{filesIntegrationId}/bulk
   * Request DTO: DeleteManyFilesApiRequest
   */
  deleteManyFilesApi = (
    request: Partial<CodeMashApi2.DeleteManyFilesApiRequest> = {} as Partial<CodeMashApi2.DeleteManyFilesApiRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/bulk',
      method: 'DELETE',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/{filesIntegrationId}/download
   * Request DTO: DownloadFileApiRequest
   */
  downloadFileApi = (
    request: Partial<CodeMashApi2.DownloadFileApiRequest> = {} as Partial<CodeMashApi2.DownloadFileApiRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<Uint8Array> => {
    return this.transport.send<Uint8Array>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/download',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      responseType: 'binary',
      ...options,
    });
  };

  /**
   * GET /{version}/files/{filesIntegrationId}/info
   * Request DTO: GetFileInfoRequest
   */
  getFileInfo = (
    request: Partial<CodeMashApi2.GetFileInfoRequest> = {} as Partial<CodeMashApi2.GetFileInfoRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetFileInfoResponse> => {
    return this.transport.send<CodeMashApi2.GetFileInfoResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/info',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/{filesIntegrationId}/sign
   * Request DTO: GetSignedUrlRequest
   */
  getSignedUrl = (
    request: Partial<CodeMashApi2.GetSignedUrlRequest> = {} as Partial<CodeMashApi2.GetSignedUrlRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSignedUrlResponse> => {
    return this.transport.send<CodeMashApi2.GetSignedUrlResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/sign',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/{filesIntegrationId}
   * Request DTO: ListFilesRequest
   */
  listFiles = (
    request: Partial<CodeMashApi2.ListFilesRequest> = {} as Partial<CodeMashApi2.ListFilesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ListFilesResponse> => {
    return this.transport.send<CodeMashApi2.ListFilesResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/files/public/{PublicId}/{Name*}
   * Request DTO: GetPublicFileRequest
   */
  getPublicFile = (
    request: Partial<CodeMashApi2.GetPublicFileRequest> = {} as Partial<CodeMashApi2.GetPublicFileRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<Uint8Array> => {
    return this.transport.send<Uint8Array>({
      target: 'api',
      path: '/{version}/files/public/{PublicId}/{Name*}',
      method: 'GET',
      request,
      pathParams: ['PublicId', 'Name*'],
      scope: 'unauthenticated',
      responseType: 'binary',
      ...options,
    });
  };

  /**
   * POST /{version}/files/{filesIntegrationId}/upload-url
   * Request DTO: RequestUploadUrlRequest
   */
  requestUploadUrl = (
    request: Partial<CodeMashApi2.RequestUploadUrlRequest> = {} as Partial<CodeMashApi2.RequestUploadUrlRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.RequestUploadUrlResponse> => {
    return this.transport.send<CodeMashApi2.RequestUploadUrlResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/upload-url',
      method: 'POST',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/files/{filesIntegrationId}/test
   * Request DTO: TestFilesIntegrationRequest
   */
  testFilesIntegration = (
    request: Partial<CodeMashApi2.TestFilesIntegrationRequest> = {} as Partial<CodeMashApi2.TestFilesIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.TestFilesIntegrationResponse> => {
    return this.transport.send<CodeMashApi2.TestFilesIntegrationResponse>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/test',
      method: 'POST',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
      ...options,
    });
  };
}
