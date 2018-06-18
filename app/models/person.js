import DS from 'ember-data';

export default DS.Model.extend({

    type: DS.attr('string'),
    name: DS.attr('string'),
    status: DS.attr('string'),
    project: DS.attr('string'),
    organisation: DS.attr('string'),
    created: DS.attr(''),
    deadline: DS.attr(''),
});
