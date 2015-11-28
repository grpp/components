Polymer({
	is: "custom-base",

	ready: function(){
		// Force narrow initially for larger
		this.$.navigationPanel.forceNarrow = true;
	}
});