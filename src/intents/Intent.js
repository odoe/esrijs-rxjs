define([
  'rx/rx'
], function(Rx) {

  if (!_subject) {
    var _subject = new Rx.Subject();
  }

  return {
    subject: _subject,
    update: function(data) {
      _subject.onNext(data);
    }
  };

});
