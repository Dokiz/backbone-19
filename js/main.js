(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };
	
	var vent = _.extend({}, Backbone.Events);
	
	console.log(vent);

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
	new App.Router;
	Backbone.history.start();
	
	
})();