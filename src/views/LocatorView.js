define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'stores/LocatorStore',
  'helpers/NumFormatter',
  'dojo/text!./templates/LocatorView.html'
], function(
  declare,
  _WidgetBase, _TemplatedMixin,
  store, format,
  template
) {

  var fixed = format(3);

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    postCreate: function() {
      store.subscribe(function(state) {
        this.yNode.innerHTML = fixed(state.y);
        this.xNode.innerHTML = fixed(state.x);
      }.bind(this));
    }
  });

});
