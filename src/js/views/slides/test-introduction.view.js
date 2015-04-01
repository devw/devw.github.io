(function (define) {
    'use strict';

    define([
        'text!../../../templates/test-introduction.html',
    ], function (testIntroductionTemplate) {

        return {
            url: '/test-introduction',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: testIntroductionTemplate
        };
    });
}(this.define));
