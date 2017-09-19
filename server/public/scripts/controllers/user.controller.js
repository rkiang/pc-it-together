myApp.controller('UserController', function (UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  UserService.getBuilds();
  UserService.getParts();
  UserService.getOthers();

  vm.deleteBuild = function (id) {
    UserService.deleteBuild(id)
  }
  vm.putBuild = function (info, build) {
    UserService.putBuild(info, build)
  };

  vm.toggleUpdate = function (build) {
    console.log(build);
    vm.changeBuild = build;
  }
  vm.newBuild = function (newBuild) {
    UserService.createBuild(newBuild);
  };
  vm.client = filestack.init('AGElhNVJSfurmgFbIEvmkz');
  vm.showPicker = function() {
      vm.client.pick({
      }).then(function(result) {
      vm.userObject.img = result.filesUploaded[0].url;
          console.log(JSON.stringify(result.filesUploaded))
      });
  }
}); //end of controller
