import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  filtersVisible: false,
  filteredActivities: computed('model', 'nameFilter', function(){
    if(this.get('nameFilter') === undefined) {
      return this.get('model')
    }
    return this.get('model').filter(a => {
      return a.get('name').indexOf(this.get('nameFilter')) !== -1;
    });
  }),
  actions: {
    toggleFilters() {
      this.toggleProperty('filtersVisible');
    },
  },
});
