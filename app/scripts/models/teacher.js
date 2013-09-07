/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TeacherModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return TeacherModel;
});