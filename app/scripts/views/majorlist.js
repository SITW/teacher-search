/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/major',
    'models/major'
], function ($, _, Backbone, JST, majorItemView, major) {
    'use strict';

    var MajorlistView = Backbone.View.extend({

        el: '#select-ul',

        initialize: function () {
            _.bindAll(this, 'majorlist', 'render');
            this.collection.bind('add', this.majorlist);
        },

        majorlist: function (item) {
            var majorItem = new majorItemView({model: item});
            $(this.el).append(majorItem.render().el);
        },

        render: function() {
            this.collection.each(this.majorlist);
            return this;
        }
    });

    return MajorlistView;
});
