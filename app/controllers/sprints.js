import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      removeBacklog(backlog) {
        alert('are you sure?')
        backlog.destroyRecord();
    },
        new() {
          this.set('editing', null);
          return this.get('store').createRecord('backlog');
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
    }
});
