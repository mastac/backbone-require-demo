define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tasks/tasksTemplate.html'
], function($, _, Backbone, tasksTemplate){

    var TasksView = Backbone.View.extend({

        el: $("#tasks"),

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
            this.$el.html(tasksTemplate);
        }

    });

    return TasksView;

});
