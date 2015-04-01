(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/slides.view',
        'views/slides/outlines.view',
        'views/slides/test-introduction.view',
        'views/slides/unit-test.view',
        'views/slides/prerequisites.view',
        'views/slides/angularjs-test.view',
        'views/slides/symfony-test.view'
    ], function (
        indexView,
        slidesView,
        outlinesView,
        testIntroductionView,
        unitTestView,
        prerequisitesView,
        angularjsTestView,
        symfonyTestView
    ) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('slides', slidesView)
                .state('slides.outlines', outlinesView)
                .state('slides.test-introduction', testIntroductionView)
                .state('slides.unit-test', unitTestView)
                .state('slides.prerequisites', prerequisitesView)
                .state('slides.angulajs-test', angularjsTestView)
                .state('slides.symfony-test', symfonyTestView);
        }];
    });
}(this.define));
