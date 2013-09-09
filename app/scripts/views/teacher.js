/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TeacherView = Backbone.View.extend({

        el: '#teacher_name_list',

        template: JST['app/scripts/templates/teacher.ejs'],

        render: function (data, major) {
            $(this.el).html(this.template({data: data, major: major}));
            return this;
        }
    });

    return TeacherView;
});
