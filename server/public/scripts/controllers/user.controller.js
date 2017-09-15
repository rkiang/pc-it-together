myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  UserService.getBuilds();
  UserService.getParts();
  
  vm.deleteBuild = function(id) {
  UserService.deleteBuild(id)
  }
  vm.putBuild = function (info) {
    UserService.putBuild(info)
};
});
