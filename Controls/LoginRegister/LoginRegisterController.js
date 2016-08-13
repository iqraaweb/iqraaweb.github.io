var LoginRegisterController=function($scope)
{
  $scope.IsLoginShown=true;

  $scope.ShowLogin=function()
  {
    $scope.IsLoginShown=true;
  };


  $scope.ShowRegister=function()
  {
    $scope.IsLoginShown=false;
  };
}

app.directive("loginregister", function() {
    return {
        templateUrl:"Controls/LoginRegister/LoginRegister.html",
        controller:LoginRegisterController
    };
});
