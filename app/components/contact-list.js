import Ember from 'ember';

export default Ember.Component.extend({
  query: '',

  filteredContacts: Ember.computed(
    'query',
    'contacts.@each.fullName',
    function() {
      const query = this.get('query');
      const queryRegex = new RegExp(query, "i");

      return this.get('contacts').filter(function(contact) {
        return contact.get('fullName').match(queryRegex);
      });
    }
  )
});
