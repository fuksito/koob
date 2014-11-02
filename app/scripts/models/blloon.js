'use strict';

angular.module('koobApp')
  .factory('BlloonAPI', function (Restangular) {
    var client = Restangular.withConfig(function(Configurer){
      Configurer.setBaseUrl('http://turbine-staging-eu.herokuapp.com/');
      Configurer.setFullResponse(true);
    });

    return client;
  })

  .factory('BlooonBooks', function($window, BlloonAPI){
    var model =  BlloonAPI.one('books');
    model.search = function(q, page, perPage){
      return model.customGET('?q=' + $window.escape(q) + '&page=' + page + '&per_page=' + perPage);
    }
    return model;
  })

  .factory('BlooonHighlights', function(BlloonAPI){
    return BlloonAPI.one('highlights');
  });

