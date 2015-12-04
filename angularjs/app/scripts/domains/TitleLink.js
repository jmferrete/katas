angular.module('katasApp')
  .factory("TitleLink", ['$location', function ($location) {
    var TitleLink = function(linkInfo) {

      this.initialize = function(linkInfo) {
        this.text = linkInfo.text;
        this.url = linkInfo.url;
      };

      this.isActive = function() {
        return (('#' + $location.path()) === this.url);
      };

      this.initialize(linkInfo);
    };

    return TitleLink;
  }]
);