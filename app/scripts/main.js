/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        knockout: {
            exports: 'ko'
        },
        knockback: {
            deps: [
                'backbone',
                'knockout'
            ],
            exports: 'kb'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        knockback: '../bower_components/knockback/knockback.min',
        knockout: './vendor/knockout-2.3.0'
    }
});

require([
    'backbone',
    'knockout',
    'knockback'
], function (Backbone, ko, kb) {
    var model = new Backbone.Model({first_name: "Planet", last_name: "Earth"});

    var ViewModel = function(model) {
      this.first_name = kb.observable(model, 'first_name');
      this.last_name = kb.observable(model, 'last_name');
      this.full_name = ko.computed((function() {return "" + (this.first_name()) + " " + (this.last_name());}), this);
    };

    var view_model = new ViewModel(model);

    ko.applyBindings(view_model, $('#kb_observable')[0]);
});
