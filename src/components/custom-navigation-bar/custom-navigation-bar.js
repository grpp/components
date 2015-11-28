Polymer({
	is: "custom-navigation-bar",
	properties:{
		selected: {
			type: Number,
			notify:true,
			observer: "_selectedChanged"
		}
	},

	initialize: function(){
		// Used for dependency injection
	},

	ready: function(){
	},

	_selectedChanged: function(newValue, oldValue){
	}
});