
(function (angular) {
    'use strict';

    angular.module('eb.charts', [])

    .directive('ebChartjs', function () {

        return {
            restrict: 'AEC',
            replace: false,
            scope: {
                ebData: "=",
                plugin: "=",
            },
            link: function ($scope, el, attrs) {

                var config = {
                    data: $scope.ebData
                }

                var plugin = $(el).ebchartjs(config);

                if (typeof $scope.plugin != 'undefined')
                    $scope.plugin = plugin;

            }
        }
    })

    .directive('ebMorris', function () {

        return {
            restrict: 'AEC',
            replace: false,
            scope: {
                ebData: "=",
                plugin: "=",
            },
            link: function ($scope, el, attrs) {

                var config = {
                    data: $scope.ebData
                }

                if (attrs.ebMorris)
                    config = $.extend(config, $scope.$parent.$eval(attrs.ebMorris));

                var plugin = $(el).ebmorris(config);

                if (typeof $scope.plugin != 'undefined')
                    $scope.plugin = plugin;

            }
        }
    })

    .directive('ebD3', function () {

        return {
            restrict: 'AEC',
            replace: false,
            scope: {
                ngModel: "=",
                plugin: "=",
            },
            link: function ($scope, el, attrs) {

                var config = {
                    data: $scope.ngModel
                }

                var plugin = $(el).ebd3(config);

                if (typeof $scope.plugin != 'undefined')
                    $scope.plugin = plugin;

            }
        }
    });

})(angular);