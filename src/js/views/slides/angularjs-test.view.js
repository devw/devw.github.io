(function (define) {
    'use strict';

    define([
        'text!../../../templates/angular-test.html',
    ], function (angularTestTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/angulajs-test',
            data: {
                css: [
                    'src/css/revealjs_themes/serif.css'
                ]
            },
            template: angularTestTemplate
        };
    });
}(this.define));
