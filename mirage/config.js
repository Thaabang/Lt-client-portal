export default function() {

    // this.get('/activities', (schema, /*request*/ ) => {
    //   // we can share the same route definitions in both development and testing
    //   // while still having control over their response data
    //   return schema.activities.all();
   
    // });

    
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  
/*  this.urlPrefix = 'http://localhost:3000';*/
 this.namespace = '/api'; 


    this.resource('backlogs');
    this.resource('people');
    this.resource('activities');
     
    
}
