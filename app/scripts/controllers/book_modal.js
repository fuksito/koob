'use strict';

angular.module('koobApp')
  .controller('BookModalCtrl', function ($scope, $modalInstance, book) {
    $scope.book = book;
  });