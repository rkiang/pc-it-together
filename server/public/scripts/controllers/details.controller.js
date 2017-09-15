myApp.controller('DetailsController',  ['UserService', '$routeParams', '$location', function (UserService, $routeParams, $location) {
    var vm = this;
    vm.currentDetails = UserService.currentDetails;
    console.log('$routeParams', $routeParams);
    UserService.getDetails($routeParams);

    // vm.editBuild = function (info) {
    //     UserService.putDetails(info)
    // };
}]);