(function (define) {
    'use strict';

    define([
        'text!../../../templates/lavoro-elettrico.html',
    ], function (thermodynamicsTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/lavoro-elettrico',
            data: {
                css: [
                    'src/css/revealjs_themes/serif.css'
                ]
            },
            template: thermodynamicsTemplate
        };
    });
}(this.define));
