import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroy: function() {
      this.get('currentModel').destroyRecord();
      this.transitionTo('contacts');
    }
  }
});
