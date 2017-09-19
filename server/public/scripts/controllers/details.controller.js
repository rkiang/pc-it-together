myApp.controller('DetailsController', ['UserService', '$routeParams', '$location', function (UserService, $routeParams, $location) {
    var vm = this;
    vm.currentDetails = UserService.currentDetails;
    console.log('$routeParams', $routeParams);
    UserService.getDetails($routeParams);
    UserService.getParts();

    vm.putBuild = function (info, build) {
        UserService.putBuild(info, build)
        // $location.path('/builds')
    };
}]);