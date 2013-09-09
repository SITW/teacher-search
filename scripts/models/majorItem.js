/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MajorItemModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return MajorItemModel;
});
