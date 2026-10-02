import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: email
 * Endpoints: 2
 */
export class EmailModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/email/preferences
   * Request DTO: GetEmailPreferencesByLinkRequest
   *
   * Reads the marketing e-mail preferences of the person a signed
   * unsubscribe link belongs to. Pass the link's `token`. No sign-in is
   * needed: the signed token is the key, so the call also works on a client
   * with no apiKey / bearerToken.
   */
  getEmailPreferencesByLink = (
    request: Partial<CodeMashHub2.GetEmailPreferencesByLinkRequest> = {} as Partial<CodeMashHub2.GetEmailPreferencesByLinkRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailPreferencesByLinkResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailPreferencesByLinkResponse>({
      target: 'hub',
      path: '/{version}/email/preferences',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'optional', // signed unsubscribe link: no sign-in needed (hand-set, see PR)
      ...options,
    });
  };

  /**
   * POST /{version}/email/one-click-unsubscribe
   * Request DTO: OneClickUnsubscribeRequest
   *
   * Public: the gateway does not authenticate it (requiresAuth false). The
   * signed link in the e-mail is the key, so the call works on a client with
   * no apiKey / bearerToken and then sends no Authorization header.
   */
  oneClickUnsubscribe = (
    request: Partial<CodeMashHub2.OneClickUnsubscribeRequest> = {} as Partial<CodeMashHub2.OneClickUnsubscribeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/email/one-click-unsubscribe',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'optional', // public one-click unsubscribe (RFC 8058): no sign-in needed (hand-set, see PR)
      ...options,
    });
  };
}
