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
}); //end of controller
