'use strict';

function StoreCtrl($scope, $routeParams, DataService){
  $scope.store = DataService.store;
  $scope.cart = DataService.cart;

  if ($routeParams.productSku != null){
    $scope.product = $scope.store.getProduct($routeParams.productSku);
  }
}
