/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MajorModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return MajorModel;
});