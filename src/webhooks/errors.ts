export class NorbixWebhookError extends Error {
  readonly code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'NorbixWebhookError';
    this.code = code;
  }
}

export class NorbixWebhookSignatureError extends NorbixWebhookError {
  constructor(message: string) {
    super(message, 'WEBHOOK_SIGNATURE_INVALID');
    this.name = 'NorbixWebhookSignatureError';
  }
}

export class NorbixWebhookParseError extends NorbixWebhookError {
  constructor(message: string) {
    super(message, 'WEBHOOK_PARSE_INVALID');
    this.name = 'NorbixWebhookParseError';
  }
}
