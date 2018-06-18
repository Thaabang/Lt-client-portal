import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('sprints');
  this.route('activities', function() {
    this.route('add');
  });
  this.route('rentals');
});

export default Router;
