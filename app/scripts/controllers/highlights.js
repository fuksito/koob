'use strict';

angular.module('koobApp')
  .controller('HighlightsCtrl', function ($scope, BlooonHighlights) {

    BlooonHighlights.get().then(function(response){
      $scope.books = response.data;
    })

  });