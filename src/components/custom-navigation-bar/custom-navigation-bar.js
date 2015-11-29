Polymer({
	is: "custom-navigation-bar",
	properties:{
		selected: {
			type: Number,
			notify:true,
			observer: "_selectedChanged"
		},
		isMenuActive: {
			type: Boolean,
			notify: true,
		}
	},

	initialize: function(){
		// Used for dependency injection
	},

	ready: function(){

	},

	_selectedChanged: function(newValue, oldValue){

	},
});