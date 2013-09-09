/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MainView = Backbone.View.extend({

        el: '#intro_container',

        template: JST['app/scripts/templates/main.ejs'],

        render: function () {
            $(this.el).html(this.template());
            return this;
        }
    });

    return MainView;
});
