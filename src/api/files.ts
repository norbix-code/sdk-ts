import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: files
 * Endpoints: 8
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
  ): Promise<CodeMashApi2.Blob> => {
    return this.transport.send<CodeMashApi2.Blob>({
      target: 'api',
      path: '/{version}/files/{filesIntegrationId}/download',
      method: 'GET',
      request,
      pathParams: ['filesIntegrationId'],
      scope: 'project',
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

  // ---------------------------------------------------------------------
  // The public file link (10b-files slice PUB). Hand-added by slice SDK-2.
  // ---------------------------------------------------------------------

  /**
   * GET /{version}/files/public/{publicId}/{name}
   * Request DTO: GetPublicFileRequest
   *
   * Reads a file somebody made public. **No sign-in and no project id**: this
   * call deliberately goes out with no `Authorization` header (`scope:
   * 'unauthenticated'`), because the link has to work in an e-mail, in an
   * `<img src>`, or in a browser on a stranger's phone. The unguessable
   * `nbpf_…` id is the whole credential.
   *
   * Answers with the file's raw bytes as a `Uint8Array`. When the storage
   * provider can sign its own links (Amazon S3, Azure Blob, Google Cloud
   * Storage) the gateway replies `302` and `fetch` follows it, so the bytes
   * come straight from the provider and never pass through Norbix.
   *
   * Every miss — unknown id, wrong name, made private again, file gone — is
   * the same plain `404`. That is deliberate: a more precise answer would
   * tell a stranger that the file exists.
   *
   * `name` is the file's name for a file link, or the path inside the folder
   * for a folder link (`2026/q1/report.pdf`); its slashes stay slashes.
   */
  getPublicFile = (
    request: Partial<CodeMashApi2.GetPublicFileRequest> = {} as Partial<CodeMashApi2.GetPublicFileRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<Uint8Array> => {
    return this.transport.send<Uint8Array>({
      target: 'api',
      path: '/{version}/files/public/{publicId}/{name*}',
      method: 'GET',
      request,
      pathParams: ['publicId', 'name'],
      scope: 'unauthenticated',
      responseType: 'binary',
      ...options,
    });
  };

  // ---------------------------------------------------------------------
  // Integration test on the API surface (10b-files slice API-TEST, #39).
  // Hand-added in exactly the shape `npm run generate-endpoints` emits for
  // the TestFilesIntegrationRequest DTO, so a regeneration gives the same
  // method back.
  // ---------------------------------------------------------------------

  /**
   * POST /{version}/files/{filesIntegrationId}/test
   * Request DTO: TestFilesIntegrationRequest
   *
   * Runs a live probe against the files integration: uploads a small file,
   * reads it, lists the folder and deletes the file again. Answers one item
   * per step (`UploadFile`, `GetFile`, `GetAllFiles`, `DeleteFile`) with
   * `result` = `OK`, `FAILED` or `NOT_TESTED` (skipped after an earlier
   * failure) and the step's `errors`. Asks the `files:create` permission,
   * because the probe writes to the storage.
   *
   * Not the same endpoint as `hub.files.testFilesIntegration`
   * (`POST /{version}/files/integrations/test`, the dashboard one).
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
