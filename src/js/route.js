(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/slides.view',
        'views/slides/prerequisites.view'
    ], function (
        indexView, slidesView,
        prerequisiteslView
        ) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('slides', slidesView)
                .state('slides.prerequisites', prerequisiteslView);
        }];
    });
}(this.define));
