/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PersonView = Backbone.View.extend({

        el: "#teacher_info",

        template: JST['app/scripts/templates/person.ejs'],

        render: function (data) {
            console.log(data);
            $(this.el).html(this.template({personData: data}));
            return this;
        }
    });

    return PersonView;
});
