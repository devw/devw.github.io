(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/biotechnology.view',
        'views/slides.view',
        'views/slides/unit.view',
        'views/slides/kinematic.view',
        'views/slides/mechanic.view',
        'views/slides/work.view',
        'views/slides/fluid.view',
        'views/slides/thermodynamics1.view',
        'views/slides/thermodynamics2.view',
        'views/slides/electrostatics.view',
        'views/slides/lavoro-elettrico.view',
        'views/slides/maxwell.view',
        'views/scores/score-1.view',
        'views/scores/score-2.view',
        'views/scores/score-3.view',
        'views/scores/score-final.view'
    ], function (
        indexView, biotechnologyView, slidesView, unitView,
        kinematicView, mechanicView, workView, fluidView,
        thermodynamics1View, thermodynamics2View,
        electrostaticsView, lavoroElettricoView, maxwellView,
        score1View, score2View, score3View, scoreFinalView) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('biotechnology', biotechnologyView)
                .state('slides', slidesView)
                .state('slides.unit', unitView)
                .state('slides.kinematic', kinematicView)
                .state('slides.mechanic', mechanicView)
                .state('slides.work', workView)
                .state('slides.fluid', fluidView)
                .state('slides.thermodynamics-1', thermodynamics1View)
                .state('slides.thermodynamics-2', thermodynamics2View)
                .state('slides.electrostatics', electrostaticsView)
                .state('slides.lavoro-elettrico', lavoroElettricoView)
                .state('slides.maxwell', maxwellView)
                .state('score-1', score1View)
                .state('score-2', score2View)
                .state('score-3', score3View)
                .state('score-final', scoreFinalView);
        }];
    });
}(this.define));
