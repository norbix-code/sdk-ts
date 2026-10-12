/**
 * Error thrown by `parseFunctionEvent` and the typed views on a
 * `CodeFunctionEvent`. `code` tells the handler what went wrong without
 * parsing the message.
 */
export class NorbixFunctionEventError extends Error {
  readonly code: NorbixFunctionEventErrorCode;

  constructor(message: string, code: NorbixFunctionEventErrorCode) {
    super(message);
    this.name = 'NorbixFunctionEventError';
    this.code = code;
  }
}

export type NorbixFunctionEventErrorCode =
  /** The raw input is not JSON / not an object. */
  | 'FUNCTION_EVENT_INVALID'
  /** `specVersion` is missing or not one this SDK understands. */
  | 'FUNCTION_EVENT_UNSUPPORTED_SPEC_VERSION'
  /** A typed view was asked for a slot the event does not carry. */
  | 'FUNCTION_EVENT_WRONG_SOURCE'
  /** `clientOptions()` needs `context.runAs.accessToken` and it is absent. */
  | 'FUNCTION_EVENT_NO_RUN_AS_TOKEN';
