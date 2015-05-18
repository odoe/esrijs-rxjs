define([
  'intents/Intent',
  'rx/rx'
], function(
  Intent, Rx
) {

  if (!_instance) {
    var _instance = new Rx.Subject();
  }

  var state = {
    x: 0,
    y: 0
  };

  function update(data) {
    state = data;
    _instance.onNext(state);
  }

  Intent.subject.subscribe(function(data) {
    update(data);
  });

  _instance.onNext(state);

  return _instance;
});
