(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/slides.view',
        'views/slides/prerequisites.view',
        'views/slides/angularjs-test.view',
        'views/slides/symfony-test.view'
    ], function (
        indexView,
        slidesView,
        prerequisitesView,
        angularjsTestView,
        symfonyTestView
    ) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('slides', slidesView)
                .state('slides.prerequisites', prerequisitesView)
                .state('slides.angulajs-test', angularjsTestView)
                .state('slides.symfony-test', symfonyTestView);
        }];
    });
}(this.define));
