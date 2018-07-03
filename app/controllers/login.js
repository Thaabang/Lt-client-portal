import Controller from '@ember/controller';
import { inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session.session').authenticate('authenticator:token', email, password)
      .catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});


// import { inject as service } from '@ember/service';
// import Controller from '@ember/controller';

// export default Controller.extend({
//   session: service('session'),

//   actions: {
//     authenticate(model) {
//       console.log(this.get('session'));
      
//       const credentials = {
//         identification: model.get('email'),
//         password: model.get('password'),
//       };

//       const authenticator = 'authenticator:token';

//       this.get('session').authenticate(authenticator, credentials).
//       catch((reason) => {
//         this.set('errors', reason.errors || reason);
//       });
//     }
//   }
// });

