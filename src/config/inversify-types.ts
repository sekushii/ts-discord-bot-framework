const Types = {
  Bot: Symbol('Bot'),
  DiscordClient: Symbol('DiscordClient'),
  DbClient: Symbol('DbClient'),
  CacheClient: Symbol('CacheClient'),

  EventHandler: Symbol('EventHandler'),
  EventFactory: Symbol('EventFactory'),
  CommandHandler: Symbol('CommandHandler'),
  CommandFactory: Symbol('CommandFactory'),
  // http clients
  BooruClient: Symbol('BooruClient'),
  // repos
  GuildRepository: Symbol('GuildRepository'),
  // events
  Ready: Symbol('Ready'),
  MessageCreate: Symbol('MessageCreate'),
  GuildCreate: Symbol('GuildCreate'),
  GuildDelete: Symbol('GuildDelete'),
  // commands
  Ping: Symbol('Ping'),
  Foo: Symbol('Foo'),
  RandomImageByTag: Symbol('RandomImageByTag'),
};

export default Types;
