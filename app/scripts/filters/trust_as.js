angular.module('koobApp')

  .filter('trustAsHtml', ['$sce', function($sce){
    return function(input){
      return $sce.trustAsHtml(input)
    }
  }])

  .filter('trustAsResourceUrl', ['$sce', function($sce){
    return function(input) {
      return $sce.trustAsResourceUrl(input)
    }
  }]);