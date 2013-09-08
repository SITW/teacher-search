define([
    'jquery',
    'underscore',
    'backbone',
    'views/teacher'
], function ($, _, Backbone, teacherView) {
    'use strict';

    var majorRoute = Backbone.Router.extend({

        routes: {
            "major/:query": "queryTeacher",
            "/": "mainPage"
        },

        queryTeacher: function (query) {

            var _this = this;

            var teacherview = new teacherView();

            $.getJSON("../data/" + query + ".json", function(data) {

                teacherview.render(data)

            });
        }

    });

    return majorRoute;
})
