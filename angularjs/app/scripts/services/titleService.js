'use strict';

angular.module('katasApp')
  .service('TitleService', [ '$http', 'TitleLink', function ($http, TitleLink) {

    const titleLinksUrl = "http://localhost:9000/scripts/titleLinks.json";
    var titleLinks = [];

    function buildTitlesFrom(response) {
      for (var i = 0; i < response.data.length; i++) {
        titleLinks.push(
          new TitleLink(response.data[i])
        );
      }
    }

    function requestForTitleLinks() {
      $http.get(titleLinksUrl)
      .then(function(response){
        buildTitlesFrom(response);
      });
    }

    this.initTitleLinks = function() {
      requestForTitleLinks();
      return titleLinks;
    };
    
  }]
);
