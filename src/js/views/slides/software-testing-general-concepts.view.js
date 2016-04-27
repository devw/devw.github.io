(function (define) {
    'use strict';

    define([
        'text!../../../templates/software-testing-general-concepts.html',
    ], function (testIntroductionTemplate) {

        return {
            url: '/software-testing-general-concepts',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: testIntroductionTemplate
        };
    });
}(this.define));
