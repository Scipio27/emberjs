import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let contact = this.get('store').createRecord(
            {nom:'MICHEL', prenom:'Jack', email:''}
        );
        return contact;
    },
    actions: {
        save(contact){
            let self=this;
            contact.save().then(function(){
                self.transitionTo('contacts');
            });
        }
    }
    
});
