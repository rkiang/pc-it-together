myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;
  self.userObject = {};
  self.buildsObject = {};
  self.currentDetails = { details: {} };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  }


  self.createBuild = function (newBuild) {
    console.log('UserService function called', newBuild);
    $http.post('/create', newBuild).then(function (response) {
      console.log('Post route successful: ', response);

    });
  }

  self.getBuilds = function () {
    $http.get('/builds').then(function (response) {
      self.buildsObject.buildsArray = response.data;
      console.log('get route successful: ', self.buildsObject.buildsArray);

    });
  }

  self.deleteBuild = function (id) {
    console.log('delete button was clicked');
    $http.delete('/builds/' + id).then(function (response) {
      self.getBuilds();
    })
    
  }

  self.getDetails = function (id) {
    $http.get('/builds/details/' + id).then(function (response) {
      self.currentDetails.details = response.data;
      console.log('get details successful: ', self.currentDetails.details);
    });
  }

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  };
  // return{
  //   userObject : userObject,
  //   buildsArray : buildsObject,
  // }
});