import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('submit');
    },

    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
