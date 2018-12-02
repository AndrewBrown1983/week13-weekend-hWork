class PubSub {
  constructor(){

  }
  publish(channel, payload) {
    var event = new CustomEvent(channel, {
      detail: payload
  });
    document.dispatchEvent(event);
  }

  subscribe (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

export default PubSub;
