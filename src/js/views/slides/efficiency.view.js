(function (define) {
    'use strict';

    define([
        'text!../../../templates/efficiency.html',
    ], function (efficiencyTemplate) {

        return {
            url: '/efficiency',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'

                ]
            },
            template: efficiencyTemplate
        };
    });
}(this.define));
