import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(''),
  name: DS.attr(''),
  status: DS.attr(''),
  project: DS.attr(''),
  organisation: DS.attr(''),
  created: DS.attr(''),
  deadline: DS.attr(''),
});
