import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
 
Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      isCompleted: false
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
      isCompleted: true
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      isCompleted: false
    }
  ]
});
 
export default Todo;