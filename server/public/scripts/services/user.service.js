myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;
  self.userObject = {};
  self.buildsObject = { list: {} };
  self.buildPackage = { list: [] };
  self.currentDetails = { details: {} };
  self.parts = { list: [] };

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
      // $location.path("/build");
    });
  }
  self.cancelBuild = function () {
    console.log('UserService cancel called');
  }

  self.getBuilds = function () {
    $http.get('/builds').then(function (response) {
      self.buildsObject = response.data;
      console.log('get route successful: ', self.buildsObject);
    });
  }

  self.getOthers = function () {
    $http.get('/builds/others').then(function (response) {
      self.otherBuilds = response.data;
      console.log('get others successful: ', self.otherBuilds);
    })
  }

  self.deleteBuild = function (id) {
    console.log('delete button was clicked', id);
    $http.delete('/builds/' + id).then(function (response) {
      self.getBuilds();
    });
  }

  self.getDetails = function (id) {
    console.log('/builds/details/' + id.id);
    $http.get('/builds/details/' + id.id).then(function (response) {
      self.currentDetails.details = response.data;
      console.log('get details successful: ', self.currentDetails.details);
      // $location.path('/build/details/' +id)
    });
  }

  self.putBuild = function (id, buildPackage) {
    console.log('Edit id is:', id);
    console.log('Edit data is:', buildPackage);
    $http.put('/builds/details/' + id, buildPackage).then(function (response) {
      console.log('putBuild response:', response);
      // $location.path('/builds')
    })
    // self.getBuilds();
  }

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  };

  self.getParts = function () {
    console.log('get parts was hit');
    $http.get('/parts').then(function (response) {
      self.parts.list = response.data;
      console.log('getParts: ', self.parts);
    })
  }
});