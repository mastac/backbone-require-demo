define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/actionbar/actionbarTemplate.html'
], function($, _, Backbone, actionbarTemplate){

    var ActionbarView = Backbone.View.extend({

        el: $("#actionbar"),

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
            this.$el.html(actionbarTemplate);
        }

    });

    return ActionbarView;

});
