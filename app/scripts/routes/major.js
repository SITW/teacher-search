define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var majorRoute = Backbone.Router.extend({

        routes: {
            "major/:query": "queryTeacher"
        },

        queryTeacher: function (query) {
            $.getJSON("../data/" + query + ".json", function(data) {
                // for (var i = data.length - 1; i >= 0; i--) {
                //     _this.add({major: data[i]});
                // };
                console.log(data);
            });
        }

    });

    return majorRoute;
})
