
const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => { };
      this.target = undefined;
    }

    setEvent(target, fn) {
      this.target = target;
      this.event = fn;
    }

    trigger() {
      this.messages.forEach(message => this.event(this.target, message));
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
      this.event = () => { };
    }

    ping(target, message) {
      target.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.messages, myReceiver.ping);
  myEmitter.trigger();

  return myReceiver.messages;
};