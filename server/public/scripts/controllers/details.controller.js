myApp.controller('DetailsController', ['UserService', '$routeParams', '$location', function (UserService, $routeParams, $location) {
    var vm = this;
    vm.currentDetails = UserService.currentDetails;
    console.log('$routeParams', $routeParams);
    UserService.getDetails($routeParams);
    
    UserService.getParts();
    vm.parts = UserService.parts;
    vm.putBuild = function (info, build) {
        UserService.putBuild(info, build)
        $location.path('/builds')
    };
    vm.cancelBuild = function () {
        UserService.cancelBuild()
        $location.path('/builds')
    };
    vm.client = filestack.init('AGElhNVJSfurmgFbIEvmkz');
    vm.showPicker = function () {
      vm.client.pick({
        accept: 'image/*'
      }).then(function (result) {
        vm.userObject.img = result.filesUploaded[0].url;
        console.log(JSON.stringify(result.filesUploaded));
        // swal("Image Successfully Uploaded");
      });
    }
}]);