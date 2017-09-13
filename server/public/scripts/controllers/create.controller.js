myApp.controller('CreateController', function (UserService) {
    console.log('CreateController created');
    var vm = this;
    vm.newBuild = function (newBuild) {
        UserService.createBuild(newBuild);
    };
});