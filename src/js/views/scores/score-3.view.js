(function (define) {
    'use strict';

    define([
        'text!../../../templates/scores/score-3.html',
        '../../controllers/score.controller'
    ], function (score1Template, scoreController) {

        var vendor_dir = 'bower_components/';

        return {
            controller: scoreController,
            url: '/score-3',
            template: score1Template
        };
    });
}(this.define));
