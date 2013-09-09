/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        knockout: {
            exports: 'ko'
        },
        knockback: {
            deps: [
                'backbone',
                'knockout'
            ],
            exports: 'kb'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        knockback: '../bower_components/knockback/knockback.min',
        knockout: './vendor/knockout-2.3.0',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'routes/major',
    'views/majorlist',
    'collections/majors',
    'models/majoritem'
], function (Backbone, majorRoute, majorlistView, majors, majorItem) {

    var majorRoute = new majorRoute();

    Backbone.history.start();

    // models
    var majorItem = new majorItem();

    // collections
    var majors = new majors({model: majorItem});
    majors.getData();

    // views
    var viewMajorList = new majorlistView({collection: majors});
    viewMajorList.render();
});
