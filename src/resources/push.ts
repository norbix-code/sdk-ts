import type { NotificationsModule } from '../api/notifications.js';
import type { RequestOverrideOptions } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/** Who issued the push token. */
export type PushProvider = 'expo' | 'fcm' | 'apns';

/** The app's platform. */
export type PushPlatform = 'ios' | 'android' | 'web';

/**
 * A device registration: the provider token plus what the app knows about the
 * device. `provider` and `token` are required; everything else is optional.
 */
export type RegisterPushDeviceInput = Omit<
  Partial<CodeMashApi2.RegisterOwnPushDeviceRequest>,
  'provider' | 'token' | 'platform'
> & {
  provider: PushProvider;
  token: string;
  platform?: PushPlatform;
};

/** Paging + filter for the signed-in user's push messages. */
export type ListPushMessagesInput = Partial<CodeMashApi2.GetOwnPushMessagesRequest>;

/**
 * Push for the signed-in project user (`norbix.notifications.push`), over the
 * generated `norbix.api.notifications.*` methods. Every call runs on the API
 * host with the project user's token; a device or message of another user is
 * never visible.
 *
 * ```ts
 * const { id } = await norbix.notifications.push.registerDevice({
 *   provider: 'expo',
 *   token: expoPushToken,
 *   platform: 'ios',
 *   installationId,
 * });                                   // id is `pnd_…`
 * const page = await norbix.notifications.push.listMessages({ unreadOnly: true });
 * await norbix.notifications.push.markAllMessagesRead();
 * await norbix.notifications.push.removeDeviceByToken(expoPushToken); // on sign-out
 * ```
 */
export class PushResource {
  constructor(private readonly notifications: NotificationsModule) {}

  /**
   * Register (or refresh) this device for push. Registering the same token
   * again updates the existing device. Returns `{ id }` (`pnd_…`).
   */
  registerDevice(
    device: RegisterPushDeviceInput,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> {
    return this.notifications.registerOwnPushDevice(device, options);
  }

  /** The signed-in user's registered devices. */
  listDevices(
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetOwnPushDevicesResponse> {
    return this.notifications.getOwnPushDevices({}, options);
  }

  /** Remove one of the signed-in user's devices by its id (`pnd_…`). */
  removeDevice(
    id: string,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.notifications.deleteOwnPushDevice({ id }, options);
  }

  /** Remove the device registered with this push token — e.g. on sign-out. */
  removeDeviceByToken(
    token: string,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.notifications.deleteOwnPushDeviceByToken({ token }, options);
  }

  /** The signed-in user's push messages, newest first, paged. */
  listMessages(
    request: ListPushMessagesInput = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetOwnPushMessagesResponse> {
    return this.notifications.getOwnPushMessages(request, options);
  }

  /** Mark one push message read. */
  markMessageRead(
    id: string,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.notifications.markOwnPushMessageRead({ id }, options);
  }

  /** Mark every push message of the signed-in user read. */
  markAllMessagesRead(options: RequestOverrideOptions = {}): Promise<CodeMashApi2.EmptyResponse> {
    return this.notifications.markAllOwnPushMessagesRead({}, options);
  }
}
