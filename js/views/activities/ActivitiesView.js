define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/activities/activitiesTemplate.html'
], function($, _, Backbone, activitiesTemplate){

    var ActivitiesView = Backbone.View.extend({

        el: $("#activities"),

        initialize: function() {

            var that = this;

        },

        render: function(){
//
//            var data = {
//                owner: this.model.toJSON(),
//                _: _
//            };
//
//            var compiledTemplate = _.template( footerTemplate, data );
            this.$el.html(activitiesTemplate);
        }

    });

    return ActivitiesView;

});
