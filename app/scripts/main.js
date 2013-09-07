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
    'views/teacher',
    'collections/teacher',
    'models/teacher'
], function (Backbone, teacherView, teachers, teacher) {

    // models
    var teacher = new teacher();

    // collections
    var teachers = new teachers({model: teacher})
    teachers.getData();

    // views
    var viewTeacherList = new teacherView({collection: teachers});
    viewTeacherList.render();
});
