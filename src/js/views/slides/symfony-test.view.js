(function (define) {
    'use strict';

    define([
        'text!../../../templates/symfony-test.html',
    ], function (symfonyTestTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/symfony-test',
            data: {
                css: [
                    'src/css/revealjs_themes/serif.css'
                ]
            },
            template: symfonyTestTemplate
        };
    });
}(this.define));
