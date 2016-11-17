(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };

    App.Router = Backbone.Router.extend({
		routes: {
			''                 : 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function(id){
			console.log(id);
		},
		
		start: function(){
			console.log('Стартовая страница');
		}
	});
	new App.Router;
	Backbone.history.start();
	
	
})();