(function (define) {
    'use strict';

    define([
        'text!../../../templates/scores/score-final.html',
        '../../controllers/score.controller'
    ], function (score1Template, scoreController) {

        var vendor_dir = 'bower_components/';

        return {
            controller: scoreController,
            url: '/score-final',
            template: score1Template
        };
    });
}(this.define));
