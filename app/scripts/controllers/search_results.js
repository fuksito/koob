'use strict';

angular.module('koobApp')
  .controller('SearchResultsCtrl', function ($scope, $timeout, BlooonBooks) {

    var currentPage = 1;
    var perPage = 30;
    var totalBooks = 0;

    $scope.loading = true;
    $scope.books = []

    $scope.loadNext = function(page){

      if (page){
        currentPage = page
      } else {
        currentPage = currentPage + 1;
      }

      BlooonBooks.search($scope.query, currentPage, perPage).then(function(response){
        $scope.books = $scope.books.concat(response.data);
        $scope.loading = false;
        totalBooks = _.parseInt(response.headers('Total'));
      })
    }

    $scope.noNext = function(){
      return currentPage * perPage >= totalBooks;
    }

    var lastPromise = null;
    $scope.$watch('query', function(){
      $scope.books = [];
      if (!_.isEmpty($scope.query)){
        $scope.loading = true;
        $timeout.cancel(lastPromise);
        lastPromise = $timeout(function(){
          $scope.loadNext(1);
        }, 500)
      }
    });


  });