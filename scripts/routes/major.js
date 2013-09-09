define([
    'jquery',
    'underscore',
    'backbone',
    'views/person',
    'views/teacher',
    'views/main'
], function ($, _, Backbone, personView, teacherView, mainView) {
    'use strict';

    var majorRoute = Backbone.Router.extend({

        routes: {
            "major/:query": "queryTeacher",
            "major/:query/:person": "queryPerson",
            "": "mainPage",

        },

        queryTeacher: function (query) {
            $('#intro_container').hide();
            $('#teacher_name_list').html('');
            $('#teacher_info').html('');
            var _this = this;

            var teacherview = new teacherView();
            $.getJSON("../data/" + query + ".json", function(data) {

                teacherview.render(data, query)

            });
        },

        queryPerson: function (query, person) {
            $('#intro_container').hide();
            $('#teacher_name_list').html('');
            $('#teacher_info').html('');
            this.queryTeacher(query);

            var personview = new personView();
            $.getJSON("../data/" + query + ".json", function(data) {

                var personData = _.where(data, {姓名: person});

                personview.render(personData)
            });
        },

        mainPage: function () {
            var mainview = new mainView();
            mainview.render();
        }

    });

    return majorRoute;
})
