(function (define) {
    'use strict';

    define([
        'text!../../../templates/maxwell.html',
    ], function (thermodynamicsTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/maxwell',
            data: {
                css: [
                    'src/css/revealjs_themes/serif.css'
                ]
            },
            template: thermodynamicsTemplate
        };
    });
}(this.define));
