'use strict';

angular.module('katasApp')
  .controller('TitleBarController', ['$scope', '$location', 'TitleService', function ($scope, $location, titleService) {

    $scope.titleBarLinks = [];

    function init() {
      $scope.titleBarLinks = titleService.initTitleLinks();
    }

    init();

  }]
);
