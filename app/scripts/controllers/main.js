'use strict';

angular.module('koobApp')
  .controller('MainCtrl', function ($scope, $timeout, $modal){

    $scope.open = function(book){
      var modalInstance = $modal.open({
        templateUrl: 'views/modals/book.html',
        controller: 'BookModalCtrl',
        resolve: {
          book: function(){
            return book;
          }
        }
      });
    }

  });
