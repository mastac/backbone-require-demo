define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'views/sidebar/SidebarView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, Config, SidebarView, homeTemplate){

  var HomeView = Backbone.View.extend({

    el: $("#page"),

    render: function(){
      
      $('.navbar li').removeClass('active');
      $('.navbar li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return HomeView;
  
});
