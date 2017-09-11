myApp.controller('CreateController', function (UserService) {
    console.log('CreateController created');
    var vm = this;
    vm.userService = UserService;
  
    vm.newBuild = function (newBuild) {
      UserService.additem(newBuild);
    }
  
  });
  