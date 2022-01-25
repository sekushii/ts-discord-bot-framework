const Types = {
  Bot: Symbol('Bot'),
  DiscordClient: Symbol('DiscordClient'),

  EventHandler: Symbol('EventHandler'),
  EventFactory: Symbol('EventFactory'),
  CommandHandler: Symbol('CommandHandler'),
  CommandFactory: Symbol('CommandFactory'),
  // events
  Ready: Symbol('Ready'),
  MessageCreate: Symbol('MessageCreate'),
  // commands
  Ping: Symbol('Ping'),
  Foo: Symbol('Foo'),
};

export default Types;
