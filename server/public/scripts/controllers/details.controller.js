myApp.controller('DetailsController',  ['UserService', '$routeParams', function (UserService, $routeParams) {
    var vm = this;
    vm.currentDetails = UserService.currentDetails;
    console.log('$routeParams', $routeParams);
    UserService.getDetails($routeParams.id);

    vm.editBuild = function (info) {
        UserService.putDetails(info)
    };
}]);