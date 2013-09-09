/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MajorsCollection = Backbone.Collection.extend({

        getData: function () {

            var _this = this;

            $.getJSON("../data/list.json", function(data) {
                for (var i = data.length - 1; i >= 0; i--) {
                    _this.add({major: data[i]});
                };

            });

        }


    });

    return MajorsCollection;
});
