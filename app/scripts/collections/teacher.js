/*global define*/

define([
    'underscore',
    'backbone',
    'models/teacher'
], function (_, Backbone, TeacherModel) {
    'use strict';

    var TeacherCollection = Backbone.Collection.extend({
        model: TeacherModel
    });

    return TeacherCollection;
});