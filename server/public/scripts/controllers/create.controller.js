myApp.controller('CreateController', '$location', function (UserService, $location) {
    console.log('CreateController created');
    var vm = this;
    vm.userService = UserService;
    vm.newBuild = function (newBuild) {
        UserService.createBuild(newBuild);
        $location.path('/builds')
    };
    vm.cancelBuild = function () {
        UserService.cancelBuild()
        $location.path('/builds')
    };
    UserService.getParts();
});