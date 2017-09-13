myApp.controller('DetailsController',  ['UserService', '$routeParams', function (UserService, $routeParams) {
    var vm = this;
    vm.currentDetails = UserService.currentDetails.details;
    console.log('$routeParams', $routeParams);
    UserService.getDetails($routeParams.id);
}]);