import Route from '@ember/routing/route';
import EmberArray from '@ember/array';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    

    return [this.store.createRecord('activity',{name: "task 1"}),
    this.store.createRecord('activity',{name: "task 2"}),
  ]
  }
});

