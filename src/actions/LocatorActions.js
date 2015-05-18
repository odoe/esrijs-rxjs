define([
  'intents/Intent',
], function(topic, Intent) {

  return {
    updateXY: function updateXY(data) {
      Intent.subject.onNext(data);
    }
  };

});
