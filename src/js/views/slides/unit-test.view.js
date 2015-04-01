(function (define) {
    'use strict';

    define([
        'text!../../../templates/unit-test.html',
    ], function (hardwareTemplate) {

        return {
            url: '/unit-test',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: hardwareTemplate
        };
    });
}(this.define));
