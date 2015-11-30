Polymer({
	is: "custom-base",

	properties: {
		isNarrowDevice: {
			type: Boolean,
		},
		isMenuActive: {
			type: Boolean,
			notify: true,
			observer: "_menuActiveChanged",
		}
	},

	ready: function(){
		// Determine the type of device
		if ( this.$.navigationPanel.narrow ){
			this.isNarrowDevice = true;
		} else {
			// Force narrow initially for larger
			this.isNarrowDevice = false;
			this.$.navigationPanel.forceNarrow = true;
			this.$.navigationPanel.isableSwipe = true;
		}
	},

	_menuActiveChanged: function( active ){
		if ( this.isNarrowDevice === true ){
			this.$.navigationPanel.togglePanel();
		} else if ( this.isNarrowDevice === false ){
			if ( active ){
				this.$.navigationPanel.forceNarrow = false;
			} else {
				this.$.navigationPanel.forceNarrow = true;
			}

		}
	}
});