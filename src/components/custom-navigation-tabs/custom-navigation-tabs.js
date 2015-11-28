Polymer({
	is: "custom-navigation-tabs",

	properties:{
		selected: {
			type: Number,
			notify:true,
			observer: "_selectedChanged"
		}
	},

	_selectedChanged: function(newValue, oldValue){
		console.log(newValue);
	}
});