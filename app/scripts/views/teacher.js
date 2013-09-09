/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TeacherView = Backbone.View.extend({

        el: '#teacher_container',

        template: JST['app/scripts/templates/teacher.ejs'],

        render: function (data) {
            console.log('render');
            console.log(data);
            $(this.el).html(this.template({data: data}));
            return this;
        }
    });

    return TeacherView;
});
