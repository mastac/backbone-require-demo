define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/spaces/spacesTemplate.html'
], function($, _, Backbone, spacesTemplate){

    var SpacesView = Backbone.View.extend({

        el: $("#page"),

        render: function(){
            var that = this;
            $('.navbar li').removeClass('active');
            $('.navbar li a[href="#/spaces"]').parent().addClass('active');
            this.$el.html(spacesTemplate);
        }

    });

    return SpacesView;

});
