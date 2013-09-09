/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MajorView = Backbone.View.extend({

        tagName: 'li',

        initialize: function(){
            _.bindAll(this, 'render');
        },

        render: function(){
            var major = this.model.attributes.major;
            major = major.substring(0, major.length - 5)
            $(this.el).html('<span><a href="/#major/' + major + '">'+ major +'</a></span>');
            return this;
        }
    });

    return MajorView;
});
