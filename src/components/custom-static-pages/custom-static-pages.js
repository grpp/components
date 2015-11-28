Polymer({
	is: "custom-static-pages",
	properties: {
		selected: {
			type: Number,
			notify: true,
			observer: '_selectedChanged'
		}
	},

	_selectedChanged: function(newValue, oldValue){
		console.log(newValue);
	}

});