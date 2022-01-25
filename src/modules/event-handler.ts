import { Client } from 'discord.js';
import { inject, injectable } from 'inversify';

import Types from '@config/inversify-types';
import EventType from '@constants/event-type';
import EventFactory from '@events/event-factory';

@injectable()
export default class EventHandler {
  constructor(
    @inject(Types.DiscordClient) private readonly client: Client,
    @inject(Types.EventFactory) private readonly eventFactory: EventFactory,
  ) {}

  init() {
    this.listenToMessageEvent();
    this.listenToReadyEvent();
  }

  listenToMessageEvent() {
    this.client.on(EventType.message, (message) => {
      const handler = this.eventFactory.getInstance(EventType.message);
      handler.handle(message);
    });
  }

  listenToReadyEvent() {
    this.client.once(EventType.ready, () => {
      const handler = this.eventFactory.getInstance(EventType.ready);
      handler.handle();
    });
  }
}
