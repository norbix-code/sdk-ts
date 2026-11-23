import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: support
 * Endpoints: 12
 */
export class SupportModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/support/cases/{CaseId}/close
   * Request DTO: CloseSupportCaseRequest
   */
  closeSupportCase = (
    request: Partial<CodeMashHub2.CloseSupportCaseRequest> = {} as Partial<CodeMashHub2.CloseSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/close',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/reopen
   * Request DTO: ReopenSupportCaseRequest
   */
  reopenSupportCase = (
    request: Partial<CodeMashHub2.ReopenSupportCaseRequest> = {} as Partial<CodeMashHub2.ReopenSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/reopen',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/resolve
   * Request DTO: ResolveSupportCaseRequest
   */
  resolveSupportCase = (
    request: Partial<CodeMashHub2.ResolveSupportCaseRequest> = {} as Partial<CodeMashHub2.ResolveSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/resolve',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/messages
   * Request DTO: AppendSupportCaseMessageRequest
   */
  appendSupportCaseMessage = (
    request: Partial<CodeMashHub2.AppendSupportCaseMessageRequest> = {} as Partial<CodeMashHub2.AppendSupportCaseMessageRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/messages',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases/{CaseId}
   * Request DTO: GetSupportCase
   */
  getSupportCase = (
    request: Partial<CodeMashHub2.GetSupportCase> = {} as Partial<CodeMashHub2.GetSupportCase>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSupportCaseResponse> => {
    return this.transport.send<CodeMashHub2.GetSupportCaseResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}',
      method: 'GET',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases
   * Request DTO: GetSupportCases
   */
  getSupportCases = (
    request: Partial<CodeMashHub2.GetSupportCases> = {} as Partial<CodeMashHub2.GetSupportCases>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSupportCasesResponse> => {
    return this.transport.send<CodeMashHub2.GetSupportCasesResponse>({
      target: 'hub',
      path: '/{version}/support/cases',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases
   * Request DTO: OpenSupportCaseRequest
   */
  openSupportCase = (
    request: Partial<CodeMashHub2.OpenSupportCaseRequest> = {} as Partial<CodeMashHub2.OpenSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/issues
   * Request DTO: ReportNorbixIssueRequest
   */
  reportNorbixIssue = (
    request: Partial<CodeMashHub2.ReportNorbixIssueRequest> = {} as Partial<CodeMashHub2.ReportNorbixIssueRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ReportNorbixIssueResponse> => {
    return this.transport.send<CodeMashHub2.ReportNorbixIssueResponse>({
      target: 'hub',
      path: '/{version}/support/issues',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases/{CaseId}/attachments
   * Request DTO: GetSupportCaseAttachmentsRequest
   */
  getSupportCaseAttachments = (
    request: Partial<CodeMashHub2.GetSupportCaseAttachmentsRequest> = {} as Partial<CodeMashHub2.GetSupportCaseAttachmentsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSupportCaseAttachmentsResponse> => {
    return this.transport.send<CodeMashHub2.GetSupportCaseAttachmentsResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/attachments',
      method: 'GET',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download
   * Request DTO: DownloadSupportCaseAttachmentRequest
   */
  downloadSupportCaseAttachment = (
    request: Partial<CodeMashHub2.DownloadSupportCaseAttachmentRequest> = {} as Partial<CodeMashHub2.DownloadSupportCaseAttachmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<Uint8Array> => {
    return this.transport.send<Uint8Array>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download',
      method: 'GET',
      request,
      pathParams: ['CaseId', 'AttachmentId'],
      scope: 'project',
      responseType: 'binary',
      ...options,
    });
  };

  /**
   * DELETE /{version}/support/cases/{CaseId}/attachments/{AttachmentId}
   * Request DTO: DeleteSupportCaseAttachmentRequest
   */
  deleteSupportCaseAttachment = (
    request: Partial<CodeMashHub2.DeleteSupportCaseAttachmentRequest> = {} as Partial<CodeMashHub2.DeleteSupportCaseAttachmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/attachments/{AttachmentId}',
      method: 'DELETE',
      request,
      pathParams: ['CaseId', 'AttachmentId'],
      scope: 'project',
      ...options,
    });
  };

  // @hand-written:begin
  /**
   * Hand-written (not from `generate-endpoints`; the generator keeps the
   * `@hand-written` block): the route takes `multipart/form-data` with one
   * file part, which the generated JSON method cannot send.
   *
   * Adds one file to a support case. At most 10 MB per file and 20 files per
   * case; allowed: txt log md json xml yaml yml csv jpg jpeg png gif webp pdf
   * doc docx xls xlsx ppt pptx odt ods zip. Answers `{ id }` (`supf_…`).
   */
  addSupportCaseAttachment = (
    request: {
      caseId: string;
      /** The file's bytes. */
      file: Blob | Uint8Array | ArrayBuffer;
      /** The file name shown on the case, with its extension (`app.log`). */
      fileName: string;
      /** e.g. `text/plain`; defaults to the Blob's own type, else `application/octet-stream`. */
      contentType?: string;
    },
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    const { file, fileName, contentType, ...pathFields } = request;
    const type =
      contentType ||
      (typeof Blob !== 'undefined' && file instanceof Blob ? file.type : '') ||
      'application/octet-stream';
    const blob =
      file instanceof Blob
        ? contentType
          ? new Blob([file], { type })
          : file
        : new Blob(file === undefined ? [] : [file as BlobPart], { type });
    const form = new FormData();
    form.append('file', blob, fileName);
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/attachments',
      method: 'POST',
      request: pathFields,
      pathParams: ['CaseId'],
      scope: 'project',
      formData: form,
      ...options,
    });
  };
  // @hand-written:end
}
