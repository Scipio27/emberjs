import Route from '@ember/routing/route';
import ContactModels from 'td3/utils/contact-class'

export default Route.extend({
    model(){
        let store=this.get('store');
        let contacts=store.findAll('contact');
        return ContactClass.create(contacts);
    }
});
