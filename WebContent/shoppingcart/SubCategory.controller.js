sap.ui.controller("shoppingcart.SubCategory", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.SubCategory
*/
	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if(evt.getParameter("name") !== "category") {
			
			return;
			
		}
		
		this.catIndex = evt.getParameter("arguments").catIndex;
		
		var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/');
		
		this.getView().setBindingContext(context,'products');
		
		
	},
	
	itemSelect: function(evt) {
		
		var list = sap.ui.getCore().byId("slistId");
		
		var sItem = list.getSelectedItem();
		
		var oBindingContext = sItem.getBindingContext('products');
		
		var path = oBindingContext.sPath;
		
		var start = path.lastIndexOf('/') + 1;
		
		var subCatIndex = path.substring(start,path.length);
		
		this.router.navTo('Products', {catIndex: this.catIndex, subCatIndex: subCatIndex});
		
	},
	
	goBack: function() {
		
		this.router.navTo("");
	}


});