angular.module('koobApp')
  .filter('bytesToSize', function($sce){
    return function(input){
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (input == 0) return 'n/a';
      var i = parseInt(Math.floor(Math.log(input) / Math.log(1024)));
      if (i == 0) return input + ' ' + sizes[i];
      return (input / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }
  })