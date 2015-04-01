(function (define) {
    'use strict';

    define([
        'text!../../../templates/outlines.html',
    ], function (outlinesTemplate) {

        return {
            url: '/outlines',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: outlinesTemplate
        };
    });
}(this.define));
