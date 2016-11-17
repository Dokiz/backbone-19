(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };

	var vent = _.extend({}, Backbone.Events);
	
	App.Views.specialTasks = Backbone.View.extend({
		initialize: function (){
			vent.on('specialTasks:show', this.show, this);
		},
		show: function(id){
			console.log('выведем задачу с id:' +id);
		}
	});

    App.Router = Backbone.Router.extend({
		routes: {
			''                 : 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function(id){
			vent.trigger('specialTasks:show', id);
		},
		
		start: function(){
			console.log('Стартовая страница');
		}
	});
	
	new App.Views.specialTasks;
	
	new App.Router;
	Backbone.history.start();
	
	
})();