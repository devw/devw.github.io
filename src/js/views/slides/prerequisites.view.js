(function (define) {
    'use strict';

    define([
        'text!../../../templates/prerequisites.html',
    ], function (hardwareTemplate) {

        return {
            url: '/prerequisites',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: hardwareTemplate
        };
    });
}(this.define));
