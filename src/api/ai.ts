import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: ai
 * Endpoints: 18
 */
export class AiModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/ai/chat/sessions/{SessionId}/attachments
   * Request DTO: UploadEndUserChatAttachmentRequest
   */
  uploadEndUserChatAttachment = (
    request: Partial<CodeMashApi2.UploadEndUserChatAttachmentRequest> = {} as Partial<CodeMashApi2.UploadEndUserChatAttachmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/attachments',
      method: 'POST',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/sessions/{SessionId}/attachments
   * Request DTO: ListEndUserChatAttachmentsRequest
   */
  listEndUserChatAttachments = (
    request: Partial<CodeMashApi2.ListEndUserChatAttachmentsRequest> = {} as Partial<CodeMashApi2.ListEndUserChatAttachmentsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ListEndUserChatAttachmentsResponse> => {
    return this.transport.send<CodeMashApi2.ListEndUserChatAttachmentsResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/attachments',
      method: 'GET',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/ai/chat/attachments/{AttachmentId}
   * Request DTO: DeleteEndUserChatAttachmentRequest
   */
  deleteEndUserChatAttachment = (
    request: Partial<CodeMashApi2.DeleteEndUserChatAttachmentRequest> = {} as Partial<CodeMashApi2.DeleteEndUserChatAttachmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/attachments/{AttachmentId}',
      method: 'DELETE',
      request,
      pathParams: ['AttachmentId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback
   * Request DTO: SetEndUserChatEntryFeedbackRequest
   */
  setEndUserChatEntryFeedback = (
    request: Partial<CodeMashApi2.SetEndUserChatEntryFeedbackRequest> = {} as Partial<CodeMashApi2.SetEndUserChatEntryFeedbackRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
      method: 'PUT',
      request,
      pathParams: ['SessionId', 'EntryId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/memory
   * Request DTO: ListEndUserChatMemoryRequest
   */
  listEndUserChatMemory = (
    request: Partial<CodeMashApi2.ListEndUserChatMemoryRequest> = {} as Partial<CodeMashApi2.ListEndUserChatMemoryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ListEndUserChatMemoryResponse> => {
    return this.transport.send<CodeMashApi2.ListEndUserChatMemoryResponse>({
      target: 'api',
      path: '/{version}/ai/chat/memory',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/ai/chat/memory/{NoteId}
   * Request DTO: ForgetEndUserChatMemoryRequest
   */
  forgetEndUserChatMemory = (
    request: Partial<CodeMashApi2.ForgetEndUserChatMemoryRequest> = {} as Partial<CodeMashApi2.ForgetEndUserChatMemoryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/memory/{NoteId}',
      method: 'DELETE',
      request,
      pathParams: ['NoteId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/availability
   * Request DTO: GetEndUserChatAvailabilityRequest
   */
  getEndUserChatAvailability = (
    request: Partial<CodeMashApi2.GetEndUserChatAvailabilityRequest> = {} as Partial<CodeMashApi2.GetEndUserChatAvailabilityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEndUserChatAvailabilityResponse> => {
    return this.transport.send<CodeMashApi2.GetEndUserChatAvailabilityResponse>({
      target: 'api',
      path: '/{version}/ai/chat/availability',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/sessions
   * Request DTO: ListEndUserChatSessionsRequest
   */
  listEndUserChatSessions = (
    request: Partial<CodeMashApi2.ListEndUserChatSessionsRequest> = {} as Partial<CodeMashApi2.ListEndUserChatSessionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ListEndUserChatSessionsResponse> => {
    return this.transport.send<CodeMashApi2.ListEndUserChatSessionsResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/chat/sessions
   * Request DTO: CreateEndUserChatSessionRequest
   */
  createEndUserChatSession = (
    request: Partial<CodeMashApi2.CreateEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.CreateEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/sessions/{SessionId}
   * Request DTO: GetEndUserChatSessionRequest
   */
  getEndUserChatSession = (
    request: Partial<CodeMashApi2.GetEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.GetEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEndUserChatSessionResponse> => {
    return this.transport.send<CodeMashApi2.GetEndUserChatSessionResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      method: 'GET',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/ai/chat/sessions/{SessionId}
   * Request DTO: RenameEndUserChatSessionRequest
   */
  renameEndUserChatSession = (
    request: Partial<CodeMashApi2.RenameEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.RenameEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      method: 'PATCH',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/chat/sessions/{SessionId}/pin
   * Request DTO: PinEndUserChatSessionRequest
   */
  pinEndUserChatSession = (
    request: Partial<CodeMashApi2.PinEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.PinEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/pin',
      method: 'PUT',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/chat/sessions/{SessionId}/archive
   * Request DTO: ArchiveEndUserChatSessionRequest
   */
  archiveEndUserChatSession = (
    request: Partial<CodeMashApi2.ArchiveEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.ArchiveEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/archive',
      method: 'PUT',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/ai/chat/sessions/{SessionId}
   * Request DTO: DeleteEndUserChatSessionRequest
   */
  deleteEndUserChatSession = (
    request: Partial<CodeMashApi2.DeleteEndUserChatSessionRequest> = {} as Partial<CodeMashApi2.DeleteEndUserChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      method: 'DELETE',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/chat/sessions/{SessionId}/entries
   * Request DTO: GetEndUserChatEntriesRequest
   */
  getEndUserChatEntries = (
    request: Partial<CodeMashApi2.GetEndUserChatEntriesRequest> = {} as Partial<CodeMashApi2.GetEndUserChatEntriesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEndUserChatEntriesResponse> => {
    return this.transport.send<CodeMashApi2.GetEndUserChatEntriesResponse>({
      target: 'api',
      path: '/{version}/ai/chat/sessions/{SessionId}/entries',
      method: 'GET',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/chat/turn
   * Request DTO: StartEndUserChatTurnRequest
   */
  startEndUserChatTurn = (
    request: Partial<CodeMashApi2.StartEndUserChatTurnRequest> = {} as Partial<CodeMashApi2.StartEndUserChatTurnRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.StartEndUserChatTurnResponse> => {
    return this.transport.send<CodeMashApi2.StartEndUserChatTurnResponse>({
      target: 'api',
      path: '/{version}/ai/chat/turn',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/tools
   * Request DTO: GetEndUserAiToolsRequest
   */
  getEndUserAiTools = (
    request: Partial<CodeMashApi2.GetEndUserAiToolsRequest> = {} as Partial<CodeMashApi2.GetEndUserAiToolsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEndUserAiToolsResponse> => {
    return this.transport.send<CodeMashApi2.GetEndUserAiToolsResponse>({
      target: 'api',
      path: '/{version}/ai/tools',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/tools/{ToolName}
   * Request DTO: InvokeEndUserAiToolRequest
   */
  invokeEndUserAiTool = (
    request: Partial<CodeMashApi2.InvokeEndUserAiToolRequest> = {} as Partial<CodeMashApi2.InvokeEndUserAiToolRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.InvokeEndUserAiToolResponse> => {
    return this.transport.send<CodeMashApi2.InvokeEndUserAiToolResponse>({
      target: 'api',
      path: '/{version}/ai/tools/{ToolName}',
      method: 'POST',
      request,
      pathParams: ['ToolName'],
      scope: 'project',
      ...options,
    });
  };
}
