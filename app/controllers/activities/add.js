import Controller from '@ember/controller';


export default Controller.extend({

    actions:{
        createActivity(activity){
                this.store.createRecord('activity',{
                type: activity.type,
                name: activity.name,
                status: activity.status,
                project: activity.project,
                organisation: activity.organisation,
                created: activity.created,
                deadline: activity.deadline
           });
           activity.save();
         },
    }   
    
});


