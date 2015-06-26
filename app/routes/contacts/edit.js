import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function() {
      this.transitionTo('contacts.contact', this.get('currentModel'));
    },

    update: function() {
      const contact = this.get('currentModel');

      contact.save().then(savedContact => {
        this.transitionTo('contacts.contact', savedContact);
      });
    }
  }
});
