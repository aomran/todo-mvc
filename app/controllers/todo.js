import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		editTodo: function(){
			this.set('isEditing', true)
		},
		
		acceptChanges: function() {
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else{
				this.get('model').save();
			};
		},

		removeTodo: function(){
			this.get('model').deleteRecord().save();
		}
	}
});
