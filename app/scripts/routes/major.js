define([
    'jquery',
    'underscore',
    'backbone',
    'views/teacher',
    'views/main'
], function ($, _, Backbone, teacherView, mainView) {
    'use strict';

    var majorRoute = Backbone.Router.extend({

        routes: {
            "major/:query": "queryTeacher",
            "": "mainPage"
        },

        queryTeacher: function (query) {

            var _this = this;

            var teacherview = new teacherView();
            $.getJSON("../data/" + query + ".json", function(data) {

                teacherview.render(data)

            });
        },

        mainPage: function () {
            var mainview = new mainView();
            mainview.render();
        }

    });

    return majorRoute;
})
