import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		createTodo: function(){
			var title = this.get('newTitle');

			var todo = this.store.createRecord('todo', {
				title: title,
				isComplete: false
			});

			this.set('newTitle', '');

			todo.save();
		},

		clearCompleted: function(){
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
	 
  inflection: function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }.property('remaining'),

  allAreDone: function(key, value){
  	console.log(key + ':' + value);
  	if (value === undefined) {
  		// this is triggered when one todo is checked on/off, which triggers this computed property because we're watching @each.isCompleted.
  		return this.get('length') > 0 && this.isEvery('isCompleted', true);
  	} else {
  		this.setEach('isCompleted', value);
  		this.invoke('save');
  		return value;
  	}
  }.property('@each.isCompleted')
});
