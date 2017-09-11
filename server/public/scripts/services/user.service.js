myApp.factory('UserService', function($http, $location){
  console.log('UserService Loaded');

  var userObject = {};
  var buildsObject = {list: []};

  return {
    userObject : userObject,
    buildsArray : buildsObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('UserService -- getuser -- User Data: ', userObject.userName);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    createBuild : function(newBuild) {
      console.log('UserService function called', newBuild);
      $http.post('/create', newBuild).then(function (response) {
        console.log('Post route successful: ', response );
        
      });
    },

    getBuilds : function() {
        $http.get('/builds').then(function (response) {
        buildsObject.buildsArray = response.data;
        console.log('get route successful: ', buildsObject.buildsArray );
        
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    }
  };
});
