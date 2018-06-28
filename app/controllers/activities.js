
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filtersVisible: false,
  filteredActivities: computed('model', 'nameFilter', function () {
    if (this.get('nameFilter') === undefined) {
      return this.get('model')
    }

    return this.get('model').filter(activity => {
      return activity.get('name').toLowerCase().match(this.get('nameFilter').toLowerCase());
    });
  }),
  actions: {
    toggleFilters() {
      this.toggleProperty('filtersVisible');
    },
    removeActivity(activity) {
      if (confirm("Are you sure you want to delete activity")) {
        activity.destroyRecord();
      }
    },
        new() {
          this.set('editing', null);
          return this.get('store').createRecord('activity');
        },
        edit(model){
            this.set('editing', model.get('id'));
          },
          save(model) {
            model.save().then(()=>{
              this.set('editing', undefined);        
            })
          },
          cancel(model) {
            model.rollbackAttributes();
            this.set('editing', undefined);
          }
    },
});

