myApp.controller('UserController', function (UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  UserService.getBuilds();
  UserService.getParts();
  UserService.getOthers();

  vm.deleteBuild = function (id) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then(function () {
      swal(
        'Delete Confirmed',
        'Your build has been successfully deleted.',
        'success',
        UserService.deleteBuild(id)
      )
    }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Delete Cancelled',
          'Your build is still saved',
          'error'
        )
      }
    })
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
  vm.client = filestack.init('AGElhNVJSfurmgFbIEvmkz');
  vm.showPicker = function () {
    vm.client.pick({
      accept: 'image/*',
      imageMax: [200, 200]
    }).then(function (result) {
      vm.UserService.userObject.img = result.filesUploaded[0].url;
      console.log(JSON.stringify(result.filesUploaded));
      // swal("Image Successfully Uploaded");
    });
  }

  vm.checkFanSocket = function (moboSocket, fanSocket) {
    // console.log('moboSocket:', moboSocket);
    // console.log('fanSocket:', fanSocket);

    for (var i = 0; i < fanSocket.length; i++) {
      var item = fanSocket[i];
      if (item == moboSocket) {

        // return fanSocket;
        console.log('fanSocket:', item);

        // } else {
        //   console.log('false');
        //   return false;
      }
    }
  }
}); //end of controller
