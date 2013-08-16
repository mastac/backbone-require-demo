define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login/loginTemplate.html'
], function($, _, Backbone, loginTemplate){

    var LoginView = Backbone.View.extend({

        el: $("#page"),

        events: {
            "click .form-signin button[type=submit]": "submitClick"
        },

        submitClick: function(e){
            e.preventDefault();
            console.log("Submit Click");
            return;
        },

        render: function(){
            this.$el.html(loginTemplate);
        }
    });

    return LoginView;
});
