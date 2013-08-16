define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'models/ProjectModel',
  'collections/ProjectsCollection',
  'views/projects/ProjectListView',
  'text!templates/projects/projectsTemplate.html'
], function($, _, Backbone, SidebarView, ProjectModel, ProjectsCollection, ProjectsListView, projectsTemplate){

  var ProjectsView = Backbone.View.extend({

    el: $("#page"),

    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(projectsTemplate);

        var project0 = new ProjectModel({title:'Backbone.js', url: 'http://backbonejs.org/'});
        var project1 = new ProjectModel({title:'Require.js', url: 'http://requirejs.org/'});
        var project2 = new ProjectModel({title:'Underscore.js', url: 'http://underscorejs.org/'});
        var project3 = new ProjectModel({title:'TagInput', url: 'http://xoxco.com/projects/code/tagsinput/'});
        var project4 = new ProjectModel({title:'Bootstrap 3.0.0', url: 'https://github.com/twbs/bootstrap'});

      var aProjects = [project0, 
                      project1,
                      project2,
                      project3,
                      project4];

      var projectsCollection = new ProjectsCollection(aProjects);  
      var projectsListView = new ProjectsListView({ collection: projectsCollection}); 
      
      projectsListView.render(); 

      // add the sidebar 
      var sidebarView = new SidebarView();
      sidebarView.render();

    }
  });

  return ProjectsView;
});
