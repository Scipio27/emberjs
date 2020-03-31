import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
	creationDate: DS.attr('utc'),
	dueDate: DS.attr('utc'),
	developer: DS.belongsTo('developer', {inverse: 'projects'}),
	stories : DS.hasMany('story', {inverse: 'project'})
});
