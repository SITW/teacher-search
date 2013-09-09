/*global define*/

define([
    'underscore',
    'backbone',
    'models/major'
], function (_, Backbone, MajorModel) {
    'use strict';

    var MajorCollection = Backbone.Collection.extend({
        model: MajorModel
    });

    return MajorCollection;
});